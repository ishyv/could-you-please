<script>
	import { storyStore } from '$lib/story/store.svelte.js';
	import { soundEngine } from '$lib/audio/soundEngine.js';

	let { title = '', appId = '', children } = $props();

	function handleClose() {
		soundEngine.playKeyClick();
		storyStore.closeApp();
	}

	/**
	 * Forward mouse wheel to inner scrollable content if cursor is over window headers or chrome
	 * @param {WheelEvent} e
	 */
	function handleWheel(e) {
		// If hovering directly over an already scrollable container, let native scroll handle it
		const path = e.composedPath();
		for (const node of path) {
			if (node instanceof HTMLElement) {
				if (node.classList.contains('app-window')) break;
				const style = window.getComputedStyle(node);
				const hasScroll =
					(style.overflowY === 'auto' ||
						style.overflowY === 'scroll' ||
						style.overflow === 'auto') &&
					node.scrollHeight > node.clientHeight;
				if (hasScroll) {
					return;
				}
			}
		}

		// Otherwise, forward delta to the active window's scrollable container
		const scrollable = /** @type {HTMLElement | null} */ (
			document.querySelector(
				'.app-window [class*="overflow-y-auto"], .app-window [class*="overflow-auto"]'
			)
		);
		if (scrollable && scrollable.scrollHeight > scrollable.clientHeight) {
			scrollable.scrollTop += e.deltaY;
		}
	}
</script>

<div
	class="app-window relative flex h-full min-h-0 w-full flex-col overflow-hidden rounded-md border border-neutral-700/80 bg-neutral-900 shadow-2xl transition-all"
	onwheel={handleWheel}
>
	<!-- Window Titlebar -->
	<div
		class="flex h-9 shrink-0 items-center justify-between border-b border-neutral-800 bg-neutral-950/90 px-3 select-none"
	>
		<!-- Left: Window controls -->
		<div class="flex shrink-0 items-center gap-2">
			<button
				type="button"
				onclick={handleClose}
				class="h-3 w-3 cursor-pointer rounded-full bg-rose-500/80 transition-opacity hover:opacity-100"
				aria-label="Cerrar ventana"
			></button>
			<button
				type="button"
				onclick={handleClose}
				class="h-3 w-3 cursor-pointer rounded-full bg-amber-500/80 transition-opacity hover:opacity-100"
				aria-label="Minimizar ventana"
			></button>
			<button
				type="button"
				class="h-3 w-3 rounded-full bg-emerald-500/80 transition-opacity hover:opacity-100"
				aria-label="Maximizar ventana"
			></button>
		</div>

		<!-- Center: Window Title -->
		<div class="flex max-w-[55%] min-w-0 items-center gap-1.5 px-2">
			<span class="truncate text-xs font-medium tracking-wide text-neutral-200">{title}</span>
		</div>

		<!-- Right: Breadcrumb or path -->
		<div class="hidden shrink-0 font-mono text-[10px] text-neutral-500 sm:block">
			/home/gabi/{appId}
		</div>
	</div>

	<!-- Window Body Content -->
	<div class="relative flex min-h-0 flex-1 flex-col overflow-hidden bg-neutral-900">
		{@render children?.()}
	</div>
</div>
