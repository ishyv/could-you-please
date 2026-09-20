<script>
	import { storyStore } from '$lib/story/store.svelte.js';

	let showTitle = $state(false);

	$effect(() => {
		if (storyStore.endingCompleted) {
			const timer = setTimeout(() => {
				showTitle = true;
			}, 1400);
			return () => clearTimeout(timer);
		}
	});
</script>

{#if storyStore.endingCompleted}
	<div
		class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black transition-opacity duration-2000"
		style="opacity: {storyStore.endingCompleted ? '1' : '0'};"
	>
		{#if showTitle}
			<div class="animate-fade-in flex flex-col items-center gap-6 text-center">
				<h1
					class="font-mono text-2xl font-light tracking-[0.35em] text-neutral-200 uppercase select-none md:text-3xl"
				>
					CASO IRRESUELTO
				</h1>
				<div class="h-px w-16 bg-neutral-800"></div>
				<p class="max-w-md font-mono text-xs tracking-wider text-neutral-600">
					20 de septiembre de 2026 • 03:44 AM
				</p>

				<!-- Dev restart button if dev mode is active -->
				{#if storyStore.devMode}
					<button
						onclick={() => storyStore.resetProgress()}
						class="mt-8 cursor-pointer rounded border border-neutral-800 px-4 py-1.5 font-mono text-xs text-neutral-500 hover:text-neutral-300"
					>
						Reiniciar experiencia
					</button>
				{/if}
			</div>

			<!-- Requested subtle footer -->
			<footer
				class="animate-fade-in pointer-events-none fixed bottom-8 left-1/2 -translate-x-1/2 font-mono text-[11px] tracking-widest text-neutral-600/90 select-none"
			>
				un ...experimento... presentado por hyvnt - WIP
			</footer>
		{/if}
	</div>
{/if}

<style>
	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: scale(0.98);
		}
		to {
			opacity: 1;
			transform: scale(1);
		}
	}
	.animate-fade-in {
		animation: fadeIn 2.5s ease-out forwards;
	}
</style>
