<script>
	import { onMount, onDestroy } from 'svelte';
	import CameraRig from '$lib/components/scene/CameraRig.svelte';
	import RoomScene from '$lib/components/scene/RoomScene.svelte';
	import EndingSequence from '$lib/components/scene/EndingSequence.svelte';
	import { PerceptionScheduler } from '$lib/audio/perceptionScheduler.js';
	import { soundEngine } from '$lib/audio/soundEngine.js';

	/** @type {PerceptionScheduler | null} */
	let scheduler = null;

	onMount(() => {
		scheduler = new PerceptionScheduler();
		scheduler.init();
	});

	onDestroy(() => {
		if (scheduler) scheduler.destroy();
		soundEngine.stop();
	});
</script>

<main class="relative h-screen w-screen overflow-hidden bg-black select-none">
	<CameraRig>
		<RoomScene />
	</CameraRig>
	<EndingSequence />
</main>
