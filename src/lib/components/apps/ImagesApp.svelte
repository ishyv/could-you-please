<script>
	import { storyStore } from '$lib/story/store.svelte.js';
	import { STORY_IMAGES } from '$lib/story/images.js';
	import { soundEngine } from '$lib/audio/soundEngine.js';

	/** @type {import('$lib/story/types').StoryImage | null} */
	let selectedImg = $state(STORY_IMAGES[0]);

	/**
	 * @param {import('$lib/story/types').StoryImage} img
	 */
	function selectImage(img) {
		soundEngine.playKeyClick();
		selectedImg = img;
		storyStore.selectImage(img.id);
	}
</script>

<div class="flex h-full min-h-0 w-full divide-x divide-neutral-800 bg-neutral-900 text-neutral-100">
	<!-- Left thumbnail gallery -->
	<div
		class="flex h-full min-h-0 w-48 shrink-0 flex-col space-y-2.5 overflow-y-auto bg-neutral-950/60 p-2.5 sm:w-56 sm:p-3 md:w-60"
	>
		<div
			class="border-b border-neutral-800 pb-1.5 font-mono text-[10px] tracking-wider text-neutral-400 uppercase sm:text-[11px]"
		>
			Imágenes DCIM ({STORY_IMAGES.length})
		</div>

		{#each STORY_IMAGES as img (img.id)}
			<button
				type="button"
				onclick={() => selectImage(img)}
				class="flex w-full cursor-pointer flex-col gap-1.5 rounded-lg border p-2 text-left transition-all {selectedImg?.id ===
				img.id
					? 'border-blue-500 bg-neutral-800/90 shadow-md'
					: 'border-neutral-800 bg-neutral-900/60 hover:bg-neutral-800/60'}"
			>
				<!-- Abstract Blurred Palette Thumbnail -->
				<div
					class="relative flex h-20 w-full items-center justify-center overflow-hidden rounded border border-neutral-800"
					style="
						background: {img.dominantTone === 'warm'
						? 'linear-gradient(135deg, #78350f 0%, #1e293b 100%)'
						: img.dominantTone === 'tense'
							? 'linear-gradient(135deg, #854d0e 0%, #0f172a 100%)'
							: 'linear-gradient(135deg, #1e1b4b 0%, #020617 100%)'};
					"
				>
					<div class="absolute inset-0 opacity-60 backdrop-blur-xs"></div>
					<span class="relative font-mono text-[9px] text-neutral-400/80 uppercase">
						[{img.dominantTone}]
					</span>
				</div>

				<div class="min-w-0">
					<span class="block truncate text-xs font-medium text-neutral-200">{img.title}</span>
					<span class="block font-mono text-[10px] text-neutral-500">{img.dateLabel}</span>
				</div>
			</button>
		{/each}
	</div>

	<!-- Right image inspection card -->
	{#if selectedImg}
		<div
			class="flex h-full min-h-0 min-w-0 flex-1 flex-col overflow-y-auto bg-neutral-900 p-4 sm:p-6"
		>
			<!-- Header / Metadata -->
			<div class="mb-4 border-b border-neutral-800 pb-3">
				<div class="flex items-center justify-between gap-2">
					<h2 class="truncate text-sm font-semibold text-neutral-200 sm:text-base">
						{selectedImg.title}
					</h2>
					<span class="shrink-0 font-mono text-[10px] text-neutral-400 sm:text-[11px]"
						>{selectedImg.dateLabel}</span
					>
				</div>
				<div
					class="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[10px] text-neutral-500 sm:text-[11px]"
				>
					<span>{selectedImg.filename}</span>
					<span>•</span>
					<span>{selectedImg.dimensions}</span>
					<span>•</span>
					<span>{selectedImg.fileSize}</span>
					<span>•</span>
					<span>{selectedImg.camera}</span>
				</div>
			</div>

			<!-- Visual representation block -->
			<div
				class="relative mb-5 flex h-32 w-full shrink-0 items-center justify-center overflow-hidden rounded-lg border border-neutral-800 shadow-inner sm:h-40 md:h-48"
				style="
					background: {selectedImg.dominantTone === 'warm'
					? 'radial-gradient(circle at 60% 40%, rgba(217, 119, 6, 0.25) 0%, rgba(15, 23, 42, 0.95) 75%)'
					: selectedImg.dominantTone === 'tense'
						? 'radial-gradient(circle at 40% 60%, rgba(161, 98, 7, 0.25) 0%, rgba(15, 23, 42, 0.95) 75%)'
						: 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.2) 0%, rgba(2, 6, 23, 0.98) 75%)'};
				"
			>
				<div class="p-3 text-center">
					<span class="block font-mono text-xs tracking-wider text-neutral-400 uppercase">
						[{selectedImg.filename}]
					</span>
					<span class="mt-1 block font-mono text-[10px] text-neutral-500">
						Representación forense generada por metadatos EXIF
					</span>
				</div>
			</div>

			<!-- Narrative Description (Simplified & direct) -->
			<div class="max-w-2xl space-y-3.5">
				<div>
					<span class="mb-1 block font-mono text-[10px] tracking-wider text-neutral-500 uppercase">
						Descripción de la escena
					</span>
					<p
						class="rounded-lg border border-neutral-800/80 bg-neutral-950/50 p-3.5 font-sans text-xs leading-relaxed text-neutral-200 sm:p-4 sm:text-[13px]"
					>
						{selectedImg.description}
					</p>
				</div>

				{#if selectedImg.subjectiveNote}
					<div>
						<span class="mb-1 block font-mono text-[10px] tracking-wider text-blue-400 uppercase">
							Nota personal (Marcos)
						</span>
						<p
							class="rounded-lg border border-blue-900/40 bg-blue-950/20 p-3 font-sans text-xs leading-relaxed text-neutral-200 italic sm:p-3.5 sm:text-[13px]"
						>
							"{selectedImg.subjectiveNote}"
						</p>
					</div>
				{/if}
			</div>
		</div>
	{/if}
</div>
