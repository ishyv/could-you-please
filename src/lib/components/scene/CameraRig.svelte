<script>
	import { onMount, onDestroy } from 'svelte';
	import { storyStore } from '$lib/story/store.svelte.js';
	import { soundEngine } from '$lib/audio/soundEngine.js';

	let { children } = $props();

	// Smooth camera target and interpolated values
	let targetX = 0;
	let targetY = 0;
	let currentX = 0;
	let currentY = 0;

	// Camera zoom interpolation (0: normal resting distance, 1: leaned in close to screen)
	let currentZoom = 0;

	let rafId = 0;
	let startTime = 0;

	// Breathing sway parameters
	const SWAY_SPEED = 0.0012;
	const SWAY_AMP_X = 0.8;
	const SWAY_AMP_Y = 1.2;

	/**
	 * @param {MouseEvent} e
	 */
	function onPointerMove(e) {
		if (storyStore.reducedMotion) return;
		const width = window.innerWidth || 1920;
		const height = window.innerHeight || 1080;
		// Normalized pointer offset (-1 to 1)
		const nx = (e.clientX / width - 0.5) * 2;
		const ny = (e.clientY / height - 0.5) * 2;

		// Maximum head rotation in degrees
		targetX = nx * 3.5;
		targetY = -ny * 2.8;
	}

	/**
	 * Intercept right click context menu to toggle screen zoom
	 * @param {MouseEvent} e
	 */
	function onContextMenu(e) {
		e.preventDefault();
		if (!storyStore.endingCompleted) {
			storyStore.toggleZoom();
			soundEngine.playLeanShift(storyStore.isZoomed);
		}
	}

	/**
	 * Allow ESC key to exit zoom
	 * @param {KeyboardEvent} e
	 */
	function onKeyDown(e) {
		if (e.key === 'Escape' && storyStore.isZoomed) {
			storyStore.setZoom(false);
			soundEngine.playLeanShift(false);
		}
	}

	/**
	 * @param {number} timestamp
	 */
	function loop(timestamp) {
		if (!startTime) startTime = timestamp;
		const elapsed = timestamp - startTime;

		if (!storyStore.reducedMotion && !storyStore.endingStarted) {
			// Linear interpolation for gentle head inertia
			currentX += (targetX - currentX) * 0.05;
			currentY += (targetY - currentY) * 0.04;

			// Smooth, organic zoom damping simulating physically leaning forward
			const targetZoom = storyStore.isZoomed ? 1.0 : 0.0;
			currentZoom += (targetZoom - currentZoom) * 0.055;

			// Organic breathing wave (damped slightly when leaning in and concentrating)
			const stability = 1 - currentZoom * 0.4;
			const swayX = Math.sin(elapsed * SWAY_SPEED) * SWAY_AMP_X * stability;
			const swayY = Math.cos(elapsed * SWAY_SPEED * 0.85) * SWAY_AMP_Y * stability;

			// Forward lean parameters:
			// - moves 280px forward in local Z space
			// - dips eye height slightly down by 22px
			// - slight pitch angle forward by 1.6deg
			const zoomZ = currentZoom * 280;
			const zoomY = currentZoom * 22;
			const zoomPitch = currentZoom * 1.6;

			const rotY = (currentX + swayX * 0.5) * stability;
			const rotX = (currentY + swayY * 0.5) * stability + zoomPitch;

			const transX = -rotY * 4 * stability;
			const transY = rotX * 3 * stability + zoomY;

			const root = document.documentElement;
			root.style.setProperty('--cam-rot-y', `${rotY.toFixed(3)}deg`);
			root.style.setProperty('--cam-rot-x', `${rotX.toFixed(3)}deg`);
			root.style.setProperty('--cam-trans-x', `${transX.toFixed(1)}px`);
			root.style.setProperty('--cam-trans-y', `${transY.toFixed(1)}px`);
			root.style.setProperty('--cam-zoom-z', `${zoomZ.toFixed(1)}px`);
			root.style.setProperty('--cam-zoom-progress', `${currentZoom.toFixed(3)}`);
		} else {
			const root = document.documentElement;
			root.style.setProperty('--cam-rot-y', '0deg');
			root.style.setProperty('--cam-rot-x', '0deg');
			root.style.setProperty('--cam-trans-x', '0px');
			root.style.setProperty('--cam-trans-y', '0px');
			root.style.setProperty('--cam-zoom-z', '0px');
			root.style.setProperty('--cam-zoom-progress', '0');
		}

		rafId = requestAnimationFrame(loop);
	}

	onMount(() => {
		window.addEventListener('mousemove', onPointerMove, { passive: true });
		window.addEventListener('contextmenu', onContextMenu);
		window.addEventListener('keydown', onKeyDown);
		rafId = requestAnimationFrame(loop);
	});

	onDestroy(() => {
		if (typeof window !== 'undefined') {
			window.removeEventListener('mousemove', onPointerMove);
			window.removeEventListener('contextmenu', onContextMenu);
			window.removeEventListener('keydown', onKeyDown);
			cancelAnimationFrame(rafId);
		}
	});
</script>

<div
	class="camera-viewport relative h-screen w-screen overflow-hidden bg-black text-neutral-200 select-none"
	style="perspective: 1100px;"
>
	<div
		class="camera-rig pointer-events-auto h-full w-full will-change-transform"
		style="
			transform-style: preserve-3d;
			transform: rotateX(var(--cam-rot-x, 0deg)) rotateY(var(--cam-rot-y, 0deg)) translate3d(var(--cam-trans-x, 0px), var(--cam-trans-y, 0px), var(--cam-zoom-z, 0px));
			filter: blur(calc(var(--focus-fatigue, 0) * 1.6px));
			transition: filter 0.4s ease-out;
		"
	>
		{@render children()}
	</div>

	<!-- Involuntary subtle eye blink overlay -->
	{#if storyStore.isBlinking}
		<div
			class="pointer-events-none fixed inset-0 z-50 bg-black/85 transition-opacity duration-150"
		></div>
	{/if}
</div>

<style>
	:global(:root) {
		--cam-rot-x: 0deg;
		--cam-rot-y: 0deg;
		--cam-trans-x: 0px;
		--cam-trans-y: 0px;
		--cam-zoom-z: 0px;
		--cam-zoom-progress: 0;
	}
</style>
