import { describe, it, expect, beforeEach } from 'vitest';
import { storyStore } from './store.svelte.js';
import { STORY_DOWNLOADS } from './downloads.js';
import { STORY_IMAGES } from './images.js';
import { STORY_NOTES } from './notes.js';
import { FINAL_TRACE } from './final-trace.js';

describe('Complete Player Experience Lifecycle', () => {
	beforeEach(() => {
		storyStore.resetProgress();
	});

	it('starts in unpowered, dark nocturnal state', () => {
		expect(storyStore.booted).toBe(false);
		expect(storyStore.remoteConnected).toBe(false);
		expect(storyStore.endingStarted).toBe(false);
		expect(storyStore.endingCompleted).toBe(false);
		expect(storyStore.endingAvailable).toBe(false);
		expect(storyStore.viewedArtifacts.size).toBe(0);
	});

	it('powers on and connects via SSH transition', () => {
		storyStore.boot();
		expect(storyStore.booted).toBe(true);

		storyStore.connectRemote();
		expect(storyStore.remoteConnected).toBe(true);
	});

	it('adapts screen luminance and temperature across different applications', () => {
		storyStore.openApp('chat');
		expect(storyStore.screenLuminance).toBe(0.65);
		expect(storyStore.screenTemperature).toBe('neutral');

		storyStore.openApp('images');
		expect(storyStore.screenLuminance).toBe(0.8);
		expect(storyStore.screenTemperature).toBe('warm');

		storyStore.openApp('downloads');
		expect(storyStore.screenLuminance).toBe(0.55);
		expect(storyStore.screenTemperature).toBe('cool');

		storyStore.closeApp();
		expect(storyStore.activeApp).toBeNull();
		expect(storyStore.screenLuminance).toBe(0.4);
	});

	it('steps through the four core thematic conversations and tracks narrative context', () => {
		// 1. Read PLAYER conversation (Baseline: warm, witty, normal friend)
		storyStore.selectChatThread('chat_player');
		expect(storyStore.activeChatThreadId).toBe('chat_player');
		expect(storyStore.hasPlayerChat).toBe(true);
		expect(storyStore.hasWorkPressure).toBe(false);
		expect(storyStore.endingAvailable).toBe(false);

		// 2. Read CFO conversation (Corporate pressure, PIP)
		storyStore.selectChatThread('chat_cfo');
		expect(storyStore.hasWorkPressure).toBe(true);
		expect(storyStore.hasFamilyPressure).toBe(false);
		expect(storyStore.endingAvailable).toBe(false);

		// 3. Read WIFE conversation (Elena: financial panic, bounced debit, loan discovery)
		storyStore.selectChatThread('chat_wife');
		expect(storyStore.hasFamilyPressure).toBe(true);
		expect(storyStore.hasCriminalDrift).toBe(false);
		expect(storyStore.endingAvailable).toBe(false);

		// 4. Read GROUP conversation (Los de siempre: Vektor, criminal staging dump)
		storyStore.selectChatThread('chat_group');
		expect(storyStore.hasCriminalDrift).toBe(true);
		expect(storyStore.hasFinalTrace).toBe(false);
		expect(storyStore.endingAvailable).toBe(false);
	});

	it('inspects images, downloads, history, and notes without unlocking ending prematurely', () => {
		// Player inspects downloads
		storyStore.markArtifactViewed(STORY_DOWNLOADS[0].id);
		storyStore.markArtifactViewed(STORY_DOWNLOADS[8].id); // chisel

		// Player inspects images
		storyStore.selectImage(STORY_IMAGES[0].id);
		storyStore.selectImage(STORY_IMAGES[2].id); // Image C

		// Player inspects notes
		storyStore.markArtifactViewed(STORY_NOTES[0].id); // budget
		storyStore.markArtifactViewed(STORY_NOTES[2].id); // unsent draft

		// Ending must still be locked until all major thematic branches AND final trace are seen
		expect(storyStore.endingAvailable).toBe(false);
	});

	it('unlocks canonical ending once all thematic contexts and final trace are inspected', () => {
		// Player visits all required facets
		storyStore.selectChatThread('chat_player');
		storyStore.selectChatThread('chat_cfo');
		storyStore.selectChatThread('chat_wife');
		storyStore.selectChatThread('chat_group');

		// Open Final Trace app
		storyStore.markArtifactViewed(FINAL_TRACE.id);

		expect(storyStore.hasPlayerChat).toBe(true);
		expect(storyStore.hasWorkPressure).toBe(true);
		expect(storyStore.hasFamilyPressure).toBe(true);
		expect(storyStore.hasCriminalDrift).toBe(true);
		expect(storyStore.hasFinalTrace).toBe(true);

		// Ending is now unlocked!
		expect(storyStore.endingAvailable).toBe(true);

		// Player triggers closing the laptop
		storyStore.triggerEnding();
		expect(storyStore.endingStarted).toBe(true);
		expect(storyStore.screenLuminance).toBe(0);
	});

	it('persists and restores state correctly', () => {
		storyStore.boot();
		storyStore.connectRemote();
		storyStore.selectChatThread('chat_player');
		storyStore.markArtifactViewed('img_c');

		expect(storyStore.viewedArtifacts.has('chat_player')).toBe(true);
		expect(storyStore.viewedArtifacts.has('img_c')).toBe(true);

		// Reset clears all persistence
		storyStore.resetProgress();
		expect(storyStore.booted).toBe(false);
		expect(storyStore.viewedArtifacts.size).toBe(0);
	});
});
