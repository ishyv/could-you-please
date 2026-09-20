/**
 * Procedural Web Audio Atmospheric Sound Engine for CASE UNRESOLVED.
 * Generates continuous ambient beds (HVAC / room tone, laptop fan hum)
 * and restrained physical one-shots (boot click, key taps, hinge close)
 * with zero external asset dependencies.
 */

class SoundEngine {
	/** @type {AudioContext | null} */
	ctx = null;
	/** @type {GainNode | null} */
	masterGain = null;
	/** @type {GainNode | null} */
	fanGain = null;
	/** @type {GainNode | null} */
	roomGain = null;
	/** @type {OscillatorNode | null} */
	fanOsc = null;
	/** @type {BiquadFilterNode | null} */
	fanFilter = null;
	isRunning = false;
	muted = false;
	/** @type {ReturnType<typeof setTimeout> | null} */
	ambientTimer = null;

	init() {
		if (this.ctx || typeof window === 'undefined') return;
		try {
			const AudioContextClass =
				window.AudioContext ||
				// @ts-expect-error webkitAudioContext fallback
				window.webkitAudioContext;
			if (!AudioContextClass) return;
			this.ctx = new AudioContextClass();
			this.masterGain = this.ctx.createGain();
			this.masterGain.gain.setValueAtTime(0.7, this.ctx.currentTime);
			this.masterGain.connect(this.ctx.destination);
		} catch {
			// AudioContext initialization failed (e.g. headless or disabled)
		}
	}

	async startAmbient() {
		this.init();
		if (!this.ctx || !this.masterGain) return;
		if (this.ctx.state === 'suspended') {
			await this.ctx.resume();
		}
		if (this.isRunning) return;
		this.isRunning = true;

		const now = this.ctx.currentTime;

		// 1. Room Tone / HVAC: Filtered Noise Buffer
		try {
			const bufferSize = this.ctx.sampleRate * 2;
			const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
			const output = noiseBuffer.getChannelData(0);
			let b0 = 0,
				b1 = 0,
				b2 = 0,
				b3 = 0,
				b4 = 0,
				b5 = 0,
				b6 = 0;
			for (let i = 0; i < bufferSize; i++) {
				const white = Math.random() * 2 - 1;
				b0 = 0.99886 * b0 + white * 0.0555179;
				b1 = 0.99332 * b1 + white * 0.0750759;
				b2 = 0.969 * b2 + white * 0.153852;
				b3 = 0.8665 * b3 + white * 0.3104856;
				b4 = 0.55 * b4 + white * 0.5329522;
				b5 = -0.7616 * b5 - white * 0.016898;
				output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.02;
				b6 = white * 0.115926;
			}

			const whiteNoiseSource = this.ctx.createBufferSource();
			whiteNoiseSource.buffer = noiseBuffer;
			whiteNoiseSource.loop = true;

			const roomFilter = this.ctx.createBiquadFilter();
			roomFilter.type = 'lowpass';
			roomFilter.frequency.setValueAtTime(220, now);

			this.roomGain = this.ctx.createGain();
			this.roomGain.gain.setValueAtTime(0.001, now);
			this.roomGain.gain.exponentialRampToValueAtTime(0.2, now + 3);

			whiteNoiseSource.connect(roomFilter);
			roomFilter.connect(this.roomGain);
			this.roomGain.connect(this.masterGain);
			whiteNoiseSource.start(now);
		} catch {
			// Ignore noise generator error
		}

		// 2. Laptop Fan Bed: Dual Oscillator + Lowpass resonance
		try {
			this.fanOsc = this.ctx.createOscillator();
			this.fanOsc.type = 'triangle';
			this.fanOsc.frequency.setValueAtTime(74, now); // Low rotational hum

			this.fanFilter = this.ctx.createBiquadFilter();
			this.fanFilter.type = 'bandpass';
			this.fanFilter.frequency.setValueAtTime(320, now);
			this.fanFilter.Q.setValueAtTime(1.8, now);

			this.fanGain = this.ctx.createGain();
			this.fanGain.gain.setValueAtTime(0.001, now);
			// Fan ramps up on boot
			this.fanGain.gain.exponentialRampToValueAtTime(0.12, now + 2);

			this.fanOsc.connect(this.fanFilter);
			this.fanFilter.connect(this.fanGain);
			this.fanGain.connect(this.masterGain);
			this.fanOsc.start(now);
		} catch {
			// Ignore fan error
		}

		this.scheduleNextAmbientOneShot();
	}

	scheduleNextAmbientOneShot() {
		if (!this.isRunning) return;
		// Semi-random environmental one-shot every 45-80 seconds
		const delayMs = 45000 + Math.random() * 35000;
		this.ambientTimer = setTimeout(() => {
			this.playDistantCreak();
			this.scheduleNextAmbientOneShot();
		}, delayMs);
	}

	playBootClick() {
		if (!this.ctx || !this.masterGain) return;
		const now = this.ctx.currentTime;
		const osc = this.ctx.createOscillator();
		const gain = this.ctx.createGain();

		osc.type = 'sine';
		osc.frequency.setValueAtTime(140, now);
		osc.frequency.exponentialRampToValueAtTime(40, now + 0.08);

		gain.gain.setValueAtTime(0.3, now);
		gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

		osc.connect(gain);
		gain.connect(this.masterGain);
		osc.start(now);
		osc.stop(now + 0.09);
	}

	playKeyClick() {
		if (!this.ctx || !this.masterGain || this.muted) return;
		const now = this.ctx.currentTime;
		const osc = this.ctx.createOscillator();
		const gain = this.ctx.createGain();

		osc.type = 'triangle';
		const freq = 1200 + Math.random() * 400;
		osc.frequency.setValueAtTime(freq, now);
		osc.frequency.exponentialRampToValueAtTime(300, now + 0.02);

		gain.gain.setValueAtTime(0.04, now);
		gain.gain.exponentialRampToValueAtTime(0.001, now + 0.02);

		osc.connect(gain);
		gain.connect(this.masterGain);
		osc.start(now);
		osc.stop(now + 0.025);
	}

	playHingeClose() {
		if (!this.ctx || !this.masterGain) return;
		const now = this.ctx.currentTime;

		// 1. Mechanical hinge friction & latch
		const osc = this.ctx.createOscillator();
		const gain = this.ctx.createGain();
		osc.type = 'sine';
		osc.frequency.setValueAtTime(120, now);
		osc.frequency.exponentialRampToValueAtTime(35, now + 0.35);

		gain.gain.setValueAtTime(0.25, now);
		gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

		osc.connect(gain);
		gain.connect(this.masterGain);
		osc.start(now);
		osc.stop(now + 0.36);

		// 2. Wind down fan & room tone
		if (this.fanGain) {
			this.fanGain.gain.cancelScheduledValues(now);
			this.fanGain.gain.setValueAtTime(this.fanGain.gain.value, now);
			this.fanGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);
		}
		if (this.roomGain) {
			this.roomGain.gain.cancelScheduledValues(now);
			this.roomGain.gain.setValueAtTime(this.roomGain.gain.value, now);
			this.roomGain.gain.exponentialRampToValueAtTime(0.03, now + 1.8);
		}

		if (this.ambientTimer) {
			clearTimeout(this.ambientTimer);
			this.ambientTimer = null;
		}
	}

	playDistantCreak() {
		if (!this.ctx || !this.masterGain || this.muted) return;
		const now = this.ctx.currentTime;
		const osc = this.ctx.createOscillator();
		const filter = this.ctx.createBiquadFilter();
		const gain = this.ctx.createGain();

		osc.type = 'sawtooth';
		osc.frequency.setValueAtTime(65, now);
		osc.frequency.linearRampToValueAtTime(58, now + 0.7);

		filter.type = 'lowpass';
		filter.frequency.setValueAtTime(110, now);

		gain.gain.setValueAtTime(0.001, now);
		gain.gain.linearRampToValueAtTime(0.035, now + 0.3);
		gain.gain.linearRampToValueAtTime(0.001, now + 0.7);

		osc.connect(filter);
		filter.connect(gain);
		gain.connect(this.masterGain);

		osc.start(now);
		osc.stop(now + 0.75);
	}

	/**
	 * Subtle posture / chair shift sound when leaning in or leaning back
	 * @param {boolean} [inward=true]
	 */
	playLeanShift(inward = true) {
		if (!this.ctx || !this.masterGain || this.muted) return;
		const now = this.ctx.currentTime;
		const osc = this.ctx.createOscillator();
		const filter = this.ctx.createBiquadFilter();
		const gain = this.ctx.createGain();

		osc.type = 'triangle';
		const startFreq = inward ? 75 : 95;
		const endFreq = inward ? 90 : 70;
		osc.frequency.setValueAtTime(startFreq, now);
		osc.frequency.exponentialRampToValueAtTime(endFreq, now + 0.35);

		filter.type = 'lowpass';
		filter.frequency.setValueAtTime(160, now);

		gain.gain.setValueAtTime(0.0001, now);
		gain.gain.linearRampToValueAtTime(0.02, now + 0.12);
		gain.gain.linearRampToValueAtTime(0.0001, now + 0.4);

		osc.connect(filter);
		filter.connect(gain);
		gain.connect(this.masterGain);

		osc.start(now);
		osc.stop(now + 0.45);
	}

	toggleMute() {
		this.muted = !this.muted;
		if (this.masterGain && this.ctx) {
			this.masterGain.gain.setValueAtTime(this.muted ? 0 : 0.7, this.ctx.currentTime);
		}
		return this.muted;
	}

	stop() {
		if (this.ambientTimer) {
			clearTimeout(this.ambientTimer);
			this.ambientTimer = null;
		}
		if (this.ctx && this.ctx.state !== 'closed') {
			try {
				this.ctx.close();
			} catch (e) {
				// Context already closed or unavailable
				void e;
			}
			this.ctx = null;
		}
		this.isRunning = false;
	}
}

export const soundEngine = new SoundEngine();
