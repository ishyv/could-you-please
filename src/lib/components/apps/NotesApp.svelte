<script>
	import { storyStore } from '$lib/story/store.svelte.js';
	import { STORY_NOTES } from '$lib/story/notes.js';
	import { soundEngine } from '$lib/audio/soundEngine.js';

	/** @type {import('$lib/story/types').NoteEntry} */
	let activeNote = $state(STORY_NOTES[0]);

	/**
	 * @param {import('$lib/story/types').NoteEntry} note
	 */
	function selectNote(note) {
		soundEngine.playKeyClick();
		activeNote = note;
		storyStore.markArtifactViewed(note.id);
	}
</script>

<div class="flex h-full min-h-0 w-full divide-x divide-neutral-800 bg-neutral-900 text-neutral-100">
	<!-- Left file tree -->
	<div
		class="flex h-full min-h-0 w-44 shrink-0 flex-col bg-neutral-950/60 font-mono text-xs sm:w-52 md:w-56"
	>
		<div
			class="border-b border-neutral-800 p-2.5 text-[10px] tracking-wider text-neutral-400 uppercase sm:p-3"
		>
			Notas ({STORY_NOTES.length})
		</div>

		<div class="min-h-0 flex-1 space-y-1 overflow-y-auto p-1.5 sm:p-2">
			{#each STORY_NOTES as note (note.id)}
				<button
					type="button"
					onclick={() => selectNote(note)}
					class="flex w-full cursor-pointer flex-col gap-0.5 rounded p-2 text-left transition-colors {activeNote.id ===
					note.id
						? 'border border-neutral-700 bg-neutral-800 text-blue-400'
						: 'text-neutral-400 hover:bg-neutral-800/60 hover:text-neutral-200'}"
				>
					<span class="truncate text-xs font-medium">{note.title}</span>
					<span class="text-[10px] text-neutral-500">{note.dateLabel}</span>
				</button>
			{/each}
		</div>
	</div>

	<!-- Right Text Editor Content -->
	<div
		class="flex h-full min-h-0 min-w-0 flex-1 flex-col overflow-hidden bg-neutral-950 font-mono text-xs"
	>
		<!-- Note tab bar -->
		<div
			class="flex h-9 shrink-0 items-center justify-between border-b border-neutral-800 bg-neutral-900/60 px-3 text-neutral-400 sm:px-4"
		>
			<span class="truncate pr-2 font-medium text-neutral-300">{activeNote.title}</span>
			<span class="shrink-0 text-[10px] text-neutral-500"
				>{activeNote.timestamp.replace('T', ' ')} • UTF-8</span
			>
		</div>

		<!-- Editor buffer with line numbers -->
		<div class="flex min-h-0 flex-1 overflow-y-auto p-3 sm:p-4">
			<!-- Line numbers -->
			<div
				class="w-7 shrink-0 pr-2 text-right font-mono text-[10px] leading-relaxed text-neutral-600 select-none sm:w-9 sm:text-xs"
			>
				{#each activeNote.content.map((_, idx) => idx + 1) as lineNum (lineNum)}
					<div>{lineNum}</div>
				{/each}
			</div>

			<!-- Document lines -->
			<div
				class="min-w-0 flex-1 overflow-x-hidden pl-2 font-mono text-xs leading-relaxed break-words whitespace-pre-wrap text-neutral-200"
			>
				{#each activeNote.content as line, i (`line_content_${i}`)}
					<div>{line || ' '}</div>
				{/each}
			</div>
		</div>

		<!-- Status footer -->
		<div
			class="flex h-6 shrink-0 items-center justify-between border-t border-neutral-800 bg-neutral-900/40 px-3 text-[10px] text-neutral-500"
		>
			<span>Solo lectura</span>
			<span>Líneas: {activeNote.content.length}</span>
		</div>
	</div>
</div>
