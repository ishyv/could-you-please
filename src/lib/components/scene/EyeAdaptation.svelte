<script>
	import { onMount } from 'svelte';

	let { onComplete = () => {} } = $props();
	let visible = $state(true);
	let opacity = $state(1);

	onMount(() => {
		// Eye adaptation settling animation
		const timer1 = setTimeout(() => {
			opacity = 0;
		}, 80);

		const timer2 = setTimeout(() => {
			visible = false;
			onComplete();
		}, 1800);

		return () => {
			clearTimeout(timer1);
			clearTimeout(timer2);
		};
	});
</script>

{#if visible}
	<div
		class="pointer-events-none fixed inset-0 z-40 bg-radial from-blue-100/90 via-sky-900/60 to-black backdrop-blur-md transition-opacity duration-1600 ease-out"
		style="opacity: {opacity}; mix-blend-mode: screen;"
	></div>
{/if}
