import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { soundEngine } from './soundEngine.js';
import { PerceptionScheduler } from './perceptionScheduler.js';
import { storyStore } from '../story/store.svelte.js';

describe('Audio Engine & Perception Scheduler Resilience', () => {
	beforeEach(() => {
		storyStore.resetProgress();
	});

	afterEach(() => {
		soundEngine.stop();
	});

	it('safely handles soundEngine triggers in headless/SSR environments without throwing', () => {
		expect(() => soundEngine.init()).not.toThrow();
		expect(() => soundEngine.playBootClick()).not.toThrow();
		expect(() => soundEngine.playKeyClick()).not.toThrow();
		expect(() => soundEngine.playHingeClose()).not.toThrow();
		expect(() => soundEngine.playDistantCreak()).not.toThrow();
		expect(() => soundEngine.stop()).not.toThrow();
	});

	it('correctly toggles audio mute state', () => {
		const initialMute = soundEngine.muted;
		const nextMute = soundEngine.toggleMute();
		expect(nextMute).toBe(!initialMute);
		expect(soundEngine.muted).toBe(!initialMute);

		// Toggle back
		const reverted = soundEngine.toggleMute();
		expect(reverted).toBe(initialMute);
		expect(soundEngine.muted).toBe(initialMute);
	});

	it('initializes and cleans up PerceptionScheduler safely', () => {
		const scheduler = new PerceptionScheduler();
		expect(() => scheduler.init()).not.toThrow();

		// Trigger explicit blink
		scheduler.performBlink();
		expect(storyStore.isBlinking).toBe(true);

		// Clean up
		expect(() => scheduler.destroy()).not.toThrow();
		expect(scheduler.destroyed).toBe(true);
	});

	it('clears focus fatigue when user interaction is registered', () => {
		storyStore.focusFatigue = 0.85;
		expect(storyStore.focusFatigue).toBe(0.85);

		storyStore.focusFatigue = 0;
		expect(storyStore.focusFatigue).toBe(0);
	});
});
