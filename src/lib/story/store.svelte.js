import { SvelteSet } from 'svelte/reactivity';

/**
 * @typedef {'chat' | 'downloads' | 'images' | 'history' | 'notes' | 'terminal'} AppId
 */

const STORAGE_KEY = 'case_unresolved_state_v1';

class ExperienceStore {
	booted = $state(false);
	remoteConnected = $state(false);
	/** @type {AppId | null} */
	activeApp = $state('chat');
	activeChatThreadId = $state('chat_player');
	/** @type {string | null} */
	activeImageId = $state(null);

	// Persistence set of viewed artifacts
	viewedArtifacts = new SvelteSet();

	endingStarted = $state(false);
	endingCompleted = $state(false);

	// Perceptual / Camera states
	screenLuminance = $state(0.7);
	/** @type {'cool' | 'neutral' | 'warm'} */
	screenTemperature = $state('cool');
	focusFatigue = $state(0);
	isBlinking = $state(false);
	audioMuted = $state(false);
	devMode = $state(false);
	reducedMotion = $state(false);
	isZoomed = $state(false);

	// Minimum context evaluation
	hasPlayerChat = $derived(
		this.viewedArtifacts.has('chat_player') ||
			this.viewedArtifacts.has('msg_p_1') ||
			this.viewedArtifacts.has('msg_p_20')
	);

	hasWorkPressure = $derived(
		this.viewedArtifacts.has('chat_cfo') ||
			this.viewedArtifacts.has('dl_5') || // PIP document
			this.viewedArtifacts.has('msg_c_8')
	);

	hasFamilyPressure = $derived(
		this.viewedArtifacts.has('chat_wife') ||
			this.viewedArtifacts.has('img_a') ||
			this.viewedArtifacts.has('img_c') ||
			this.viewedArtifacts.has('note_1') ||
			this.viewedArtifacts.has('msg_w_8')
	);

	hasCriminalDrift = $derived(
		this.viewedArtifacts.has('chat_group') ||
			this.viewedArtifacts.has('dl_9') || // chisel
			this.viewedArtifacts.has('dl_11') || // pipeline
			this.viewedArtifacts.has('note_2') ||
			this.viewedArtifacts.has('hist_6')
	);

	hasFinalTrace = $derived(this.viewedArtifacts.has('final_trace_session'));

	endingAvailable = $derived(
		this.hasFinalTrace &&
			this.hasPlayerChat &&
			this.hasWorkPressure &&
			this.hasFamilyPressure &&
			this.hasCriminalDrift
	);

	constructor() {
		// Browser environment check
		if (typeof window !== 'undefined') {
			this.loadFromStorage();
			this.checkQueryParams();
			this.checkReducedMotion();
		}
	}

	checkReducedMotion() {
		if (typeof window !== 'undefined' && window.matchMedia) {
			const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
			this.reducedMotion = mq.matches;
			mq.addEventListener('change', (e) => {
				this.reducedMotion = e.matches;
			});
		}
	}

	checkQueryParams() {
		if (typeof window === 'undefined') return;
		const params = new URLSearchParams(window.location.search);
		if (params.get('dev') === '1') {
			this.devMode = true;
		}
		if (params.get('skipBoot') === '1') {
			this.booted = true;
			this.remoteConnected = true;
		}
		if (params.get('unlockEnding') === '1') {
			this.viewedArtifacts.add('chat_player');
			this.viewedArtifacts.add('chat_cfo');
			this.viewedArtifacts.add('chat_wife');
			this.viewedArtifacts.add('chat_group');
			this.viewedArtifacts.add('final_trace_session');
		}
		if (params.get('reducedFx') === '1') {
			this.reducedMotion = true;
		}
	}

	loadFromStorage() {
		try {
			const saved = localStorage.getItem(STORAGE_KEY);
			if (saved) {
				const parsed = JSON.parse(saved);
				if (Array.isArray(parsed.viewedArtifacts)) {
					for (const id of parsed.viewedArtifacts) {
						this.viewedArtifacts.add(id);
					}
				}
				if (parsed.booted) this.booted = parsed.booted;
				if (parsed.remoteConnected) this.remoteConnected = parsed.remoteConnected;
			}
		} catch {
			// Ignore localStorage errors
		}
	}

	saveToStorage() {
		if (typeof window === 'undefined') return;
		try {
			const state = {
				booted: this.booted,
				remoteConnected: this.remoteConnected,
				viewedArtifacts: Array.from(this.viewedArtifacts)
			};
			localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
		} catch {
			// Ignore localStorage errors
		}
	}

	boot() {
		this.booted = true;
		this.saveToStorage();
	}

	connectRemote() {
		this.remoteConnected = true;
		this.saveToStorage();
	}

	/**
	 * @param {AppId} app
	 */
	openApp(app) {
		this.activeApp = app;
		// Screen luminance / temp adaptation per app
		switch (app) {
			case 'chat':
				this.screenLuminance = 0.65;
				this.screenTemperature = 'neutral';
				break;
			case 'downloads':
			case 'history':
			case 'notes':
				this.screenLuminance = 0.55;
				this.screenTemperature = 'cool';
				break;
			case 'images':
				this.screenLuminance = 0.8;
				this.screenTemperature = 'warm';
				break;
			case 'terminal':
				this.screenLuminance = 0.45;
				this.screenTemperature = 'cool';
				break;
		}
	}

	closeApp() {
		this.activeApp = null;
		this.screenLuminance = 0.4;
		this.screenTemperature = 'cool';
	}

	/**
	 * @param {string} id
	 */
	selectChatThread(id) {
		this.activeChatThreadId = id;
		this.markArtifactViewed(id);
	}

	/**
	 * @param {string | null} id
	 */
	selectImage(id) {
		this.activeImageId = id;
		if (id) {
			this.markArtifactViewed(id);
		}
	}

	/**
	 * @param {string} id
	 */
	markArtifactViewed(id) {
		if (!this.viewedArtifacts.has(id)) {
			this.viewedArtifacts.add(id);
			this.saveToStorage();
		}
	}

	triggerEnding() {
		if (this.endingStarted) return;
		this.isZoomed = false;
		this.endingStarted = true;
		// Screen lights go down
		this.screenLuminance = 0;
		setTimeout(() => {
			this.endingCompleted = true;
		}, 2600);
	}

	toggleZoom() {
		this.isZoomed = !this.isZoomed;
	}

	/**
	 * @param {boolean} value
	 */
	setZoom(value) {
		this.isZoomed = Boolean(value);
	}

	resetProgress() {
		this.booted = false;
		this.remoteConnected = false;
		this.isZoomed = false;
		this.activeApp = 'chat';
		this.activeChatThreadId = 'chat_player';
		this.activeImageId = null;
		this.viewedArtifacts.clear();
		this.endingStarted = false;
		this.endingCompleted = false;
		this.screenLuminance = 0.7;
		this.focusFatigue = 0;
		this.isBlinking = false;
		if (typeof window !== 'undefined') {
			try {
				localStorage.removeItem(STORAGE_KEY);
			} catch (e) {
				// Local storage unavailable
				void e;
			}
		}
	}
}

export const storyStore = new ExperienceStore();
