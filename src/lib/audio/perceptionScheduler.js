import { storyStore } from '../story/store.svelte.js';

/**
 * Perception scheduler managing subtle human vision artifacts:
 * - Focus fatigue (slight text blur/softening when motionless for prolonged reading)
 * - Occasional involuntary blinks (rare 160ms subtle fade)
 * - Clears fatigue immediately upon user interaction (pointer move, scroll, keypress)
 */
export class PerceptionScheduler {
	/** @type {ReturnType<typeof setTimeout> | null} */
	fatigueTimer = null;
	/** @type {ReturnType<typeof setTimeout> | null} */
	blinkTimer = null;
	destroyed = false;

	init() {
		if (typeof window === 'undefined') return;

		const handleActivity = () => {
			if (storyStore.focusFatigue > 0) {
				storyStore.focusFatigue = 0;
			}
			this.resetFatigueCountdown();
		};

		window.addEventListener('mousemove', handleActivity, { passive: true });
		window.addEventListener('keydown', handleActivity, { passive: true });
		window.addEventListener('scroll', handleActivity, { passive: true });
		window.addEventListener('pointerdown', handleActivity, { passive: true });

		this.resetFatigueCountdown();
		this.scheduleNextBlink();
	}

	resetFatigueCountdown() {
		if (this.fatigueTimer) clearTimeout(this.fatigueTimer);
		if (this.destroyed || storyStore.reducedMotion) return;

		// Trigger focus fatigue after 28-45 seconds of continuous reading without mouse shake
		const delayMs = 28000 + Math.random() * 17000;
		this.fatigueTimer = setTimeout(() => {
			if (!this.destroyed && storyStore.booted && !storyStore.endingStarted) {
				storyStore.focusFatigue = 0.85;
			}
		}, delayMs);
	}

	scheduleNextBlink() {
		if (this.blinkTimer) clearTimeout(this.blinkTimer);
		if (this.destroyed || storyStore.reducedMotion) return;

		// Rare involuntary blink every 40-75 seconds
		const delayMs = 40000 + Math.random() * 35000;
		this.blinkTimer = setTimeout(() => {
			if (!this.destroyed && storyStore.booted && !storyStore.endingStarted) {
				this.performBlink();
			}
			this.scheduleNextBlink();
		}, delayMs);
	}

	performBlink() {
		storyStore.isBlinking = true;
		setTimeout(() => {
			storyStore.isBlinking = false;
		}, 180);
	}

	destroy() {
		this.destroyed = true;
		if (this.fatigueTimer) clearTimeout(this.fatigueTimer);
		if (this.blinkTimer) clearTimeout(this.blinkTimer);
	}
}
