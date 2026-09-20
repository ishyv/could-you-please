import { describe, it, expect } from 'vitest';
import { CHARACTERS } from './characters.js';
import { STORY_CHATS } from './chats.js';
import { STORY_IMAGES } from './images.js';
import { STORY_DOWNLOADS } from './downloads.js';
import { STORY_HISTORY } from './browser-history.js';
import { STORY_NOTES } from './notes.js';
import { FINAL_TRACE } from './final-trace.js';
import { storyStore } from './store.svelte.js';

describe('Story Data & Narrative Integrity', () => {
	it('has all required characters defined with display metadata', () => {
		const requiredIds = [
			'PLAYER',
			'FRIEND',
			'WIFE',
			'DAUGHTER',
			'CFO',
			'STREET_FRIEND_A',
			'STREET_FRIEND_B',
			'CYBER_FRIEND'
		];

		for (const id of requiredIds) {
			// @ts-ignore
			expect(CHARACTERS[id]).toBeDefined();
			// @ts-ignore
			expect(CHARACTERS[id].displayName).toBeTruthy();
			// @ts-ignore
			expect(CHARACTERS[id].role).toBeTruthy();
		}
	});

	it('contains the required chat threads with valid participants and messages', () => {
		const threadIds = STORY_CHATS.map((t) => t.id);
		expect(threadIds).toContain('chat_player');
		expect(threadIds).toContain('chat_cfo');
		expect(threadIds).toContain('chat_wife');
		expect(threadIds).toContain('chat_group');
		expect(threadIds).toContain('chat_vektor_private');

		for (const thread of STORY_CHATS) {
			expect(thread.messages.length).toBeGreaterThan(0);
			for (const msg of thread.messages) {
				// @ts-ignore
				expect(CHARACTERS[msg.authorId]).toBeDefined();
				expect(msg.text).toBeTruthy();
				expect(msg.timestamp).toBeTruthy();
			}
		}
	});

	it('messages within each chat thread are sorted chronologically', () => {
		for (const thread of STORY_CHATS) {
			for (let i = 1; i < thread.messages.length; i++) {
				const prev = new Date(thread.messages[i - 1].timestamp).getTime();
				const curr = new Date(thread.messages[i].timestamp).getTime();
				expect(curr).toBeGreaterThanOrEqual(prev);
			}
		}
	});

	it('has unique IDs across all messages and artifacts', () => {
		const idSet = new Set();

		/** @param {any} id */
		const checkUnique = (id) => {
			expect(idSet.has(id)).toBe(false);
			idSet.add(id);
		};

		STORY_CHATS.forEach((t) => {
			checkUnique(t.id);
			t.messages.forEach((m) => checkUnique(m.id));
		});

		STORY_IMAGES.forEach((img) => checkUnique(img.id));
		STORY_DOWNLOADS.forEach((dl) => checkUnique(dl.id));
		STORY_HISTORY.forEach((h) => checkUnique(h.id));
		STORY_NOTES.forEach((n) => checkUnique(n.id));
		checkUnique(FINAL_TRACE.id);
	});

	it('contains the required 3 images from the timeline spec', () => {
		const imageIds = STORY_IMAGES.map((img) => img.id);
		expect(imageIds).toEqual(['img_a', 'img_b', 'img_c']);

		expect(STORY_IMAGES[0].timestamp).toContain('2026-08-30');
		expect(STORY_IMAGES[1].timestamp).toContain('2026-09-04');
		expect(STORY_IMAGES[2].timestamp).toContain('2026-09-11');

		for (const img of STORY_IMAGES) {
			expect(img.description.length).toBeGreaterThan(50);
		}
	});

	it('contains escalating downloads from ordinary to suspicious', () => {
		expect(STORY_DOWNLOADS.length).toBeGreaterThanOrEqual(10);
		const categories = STORY_DOWNLOADS.map((d) => d.category);
		expect(categories).toContain('ordinary');
		expect(categories).toContain('work');
		expect(categories).toContain('security');
		expect(categories).toContain('suspicious');
	});

	it('contains valid final trace data with unclosed session markers', () => {
		expect(FINAL_TRACE.id).toBe('final_trace_session');
		expect(FINAL_TRACE.sessionDate).toBe('2026-09-17');
		expect(FINAL_TRACE.status).toContain('LOGOUT_EVENT_UNAVAILABLE');
		expect(FINAL_TRACE.unsentBuffer).toContain('no se puede verificar');
	});

	it('correctly evaluates canonical ending eligibility based on player exploration', () => {
		storyStore.resetProgress();
		expect(storyStore.endingAvailable).toBe(false);

		// View player chat only
		storyStore.markArtifactViewed('chat_player');
		expect(storyStore.endingAvailable).toBe(false);

		// Add work pressure
		storyStore.markArtifactViewed('chat_cfo');
		expect(storyStore.endingAvailable).toBe(false);

		// Add family pressure
		storyStore.markArtifactViewed('chat_wife');
		expect(storyStore.endingAvailable).toBe(false);

		// Add criminal group drift
		storyStore.markArtifactViewed('chat_group');
		expect(storyStore.endingAvailable).toBe(false);

		// Finally view final trace
		storyStore.markArtifactViewed('final_trace_session');
		expect(storyStore.endingAvailable).toBe(true);
	});
});
