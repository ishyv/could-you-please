<script>
	import { storyStore } from '$lib/story/store.svelte.js';
	import { STORY_HISTORY } from '$lib/story/browser-history.js';
	import { soundEngine } from '$lib/audio/soundEngine.js';

	/** @type {import('$lib/story/types').HistoryEntry | null} */
	let selectedEntry = $state(STORY_HISTORY[0]);

	/**
	 * @param {import('$lib/story/types').HistoryEntry} entry
	 */
	function selectEntry(entry) {
		soundEngine.playKeyClick();
		selectedEntry = entry;
		storyStore.markArtifactViewed(entry.id);
	}
</script>

<div class="flex h-full min-h-0 w-full flex-col bg-neutral-900 text-neutral-100">
	<!-- Browser Navigation Omnibox Bar -->
	<div
		class="flex h-10 shrink-0 items-center gap-2 border-b border-neutral-800 bg-neutral-950/70 px-3 sm:gap-3 sm:px-4"
	>
		<div class="flex items-center gap-1 text-neutral-500">
			<button
				type="button"
				class="cursor-pointer px-1 py-0.5 text-xs hover:text-neutral-300"
				aria-label="Atrás">←</button
			>
			<button
				type="button"
				class="cursor-pointer px-1 py-0.5 text-xs hover:text-neutral-300"
				aria-label="Adelante">→</button
			>
			<button
				type="button"
				class="cursor-pointer px-1 py-0.5 text-xs hover:text-neutral-300"
				aria-label="Recargar">↻</button
			>
		</div>

		<div
			class="flex min-w-0 flex-1 items-center gap-2 rounded border border-neutral-800 bg-neutral-900 px-3 py-1 font-mono text-xs text-neutral-300"
		>
			<span class="shrink-0 text-neutral-500">🔒</span>
			<span class="truncate">chrome://history</span>
		</div>
	</div>

	<!-- History Stream Table -->
	<div class="min-h-0 flex-1 overflow-y-auto p-3 sm:p-4">
		<div class="mx-auto max-w-3xl space-y-1.5">
			<div
				class="mb-3 flex items-center justify-between border-b border-neutral-800 pb-2 font-mono text-[10px] text-neutral-500 sm:text-[11px]"
			>
				<span>Historial local (Últimos 30 días)</span>
				<span>{STORY_HISTORY.length} entradas</span>
			</div>

			{#each STORY_HISTORY as entry (entry.id)}
				<button
					type="button"
					onclick={() => selectEntry(entry)}
					class="flex w-full cursor-pointer items-center justify-between gap-3 rounded p-2 text-left transition-colors sm:p-2.5 {selectedEntry?.id ===
					entry.id
						? 'border border-neutral-700 bg-neutral-800/90'
						: 'hover:bg-neutral-800/60'}"
				>
					<div class="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
						<span
							class="shrink-0 font-mono text-[10px] whitespace-nowrap text-neutral-500 sm:text-[11px]"
							>{entry.dateLabel}</span
						>
						<div class="min-w-0 flex-1">
							<span class="block truncate text-xs font-medium text-neutral-200 sm:text-[13px]"
								>{entry.title}</span
							>
							<span class="block truncate font-mono text-[10px] text-neutral-500">{entry.url}</span>
						</div>
					</div>

					<div class="shrink-0 pl-2">
						{#if entry.category === 'routine'}
							<span
								class="rounded bg-neutral-800 px-1.5 py-0.5 font-mono text-[9px] text-neutral-400 sm:text-[10px]"
								>Trabajo</span
							>
						{:else if entry.category === 'financial'}
							<span
								class="rounded border border-amber-800/40 bg-amber-950/70 px-1.5 py-0.5 font-mono text-[9px] text-amber-300 sm:text-[10px]"
								>Finanzas</span
							>
						{:else if entry.category === 'investigation'}
							<span
								class="rounded border border-blue-800/40 bg-blue-950/70 px-1.5 py-0.5 font-mono text-[9px] text-blue-300 sm:text-[10px]"
								>Técnico</span
							>
						{:else}
							<span
								class="rounded border border-rose-800/40 bg-rose-950/70 px-1.5 py-0.5 font-mono text-[9px] text-rose-300 sm:text-[10px]"
								>Legal</span
							>
						{/if}
					</div>
				</button>
			{/each}
		</div>
	</div>
</div>
