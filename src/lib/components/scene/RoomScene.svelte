<script>
	import { storyStore } from '$lib/story/store.svelte.js';
	import LaptopBody from './LaptopBody.svelte';
	import EyeAdaptation from './EyeAdaptation.svelte';
	import { soundEngine } from '../../audio/soundEngine.js';

	let showingAdaptation = $state(false);

	function handleBoot() {
		storyStore.boot();
		soundEngine.playBootClick();
		soundEngine.startAmbient();
		showingAdaptation = true;
	}
</script>

<div
	class="room-container relative flex h-full w-full items-center justify-center overflow-hidden bg-neutral-950"
	style="
		--screen-lum: {storyStore.screenLuminance};
		--room-glow: calc(var(--screen-lum, 0.6) * 0.45);
	"
>
	<!-- Room wall shadows and background atmosphere -->
	<div class="pointer-events-none absolute inset-0 z-0">
		<!-- Vignette & deep dark nocturnal edges — tightens when leaned forward -->
		<div
			class="absolute inset-0 transition-all duration-700 ease-out"
			style="
				background: radial-gradient(
					circle at center,
					rgba(20, 25, 35, {storyStore.isZoomed ? 0.6 : 0.3}) 0%,
					rgba(5, 5, 8, 0.98) {storyStore.isZoomed ? '55%' : '70%'}
				);
			"
		></div>

		<!-- Subtle ambient wall cast behind laptop (scaled for larger 35% laptop) -->
		<div
			class="absolute top-1/4 left-1/2 h-[650px] w-[1300px] -translate-x-1/2 rounded-full blur-[160px] transition-all duration-700 ease-out"
			style="
				background: {storyStore.screenTemperature === 'warm'
				? 'rgba(230, 200, 160, var(--room-glow))'
				: 'rgba(120, 170, 240, var(--room-glow))'};
				opacity: {storyStore.booted && !storyStore.endingStarted
				? storyStore.isZoomed
					? '1.4'
					: '1'
				: '0.04'};
			"
		></div>

		<!-- Desk surface plane -->
		<div
			class="absolute right-0 bottom-0 left-0 h-[34%] border-t border-neutral-900/60 bg-gradient-to-b from-neutral-900/80 via-neutral-950 to-black"
		>
			<!-- Reflection on table surface -->
			<div
				class="mx-auto h-full w-[1240px] max-w-[95vw] bg-gradient-to-b from-sky-400/15 via-transparent to-transparent blur-2xl transition-opacity duration-500"
				style="opacity: {storyStore.booted && !storyStore.endingStarted ? '0.85' : '0'};"
			></div>
		</div>
	</div>

	<!-- Central 2.5D Laptop Rig -->
	<div class="relative z-10 flex flex-col items-center justify-center">
		<LaptopBody onBoot={handleBoot} />
	</div>

	<!-- Eye adaptation on power-on -->
	{#if showingAdaptation}
		<EyeAdaptation onComplete={() => (showingAdaptation = false)} />
	{/if}

	<!-- Zoom hint indicator (shows briefly on first boot, then fades) -->
	{#if storyStore.booted && !storyStore.endingStarted}
		<div
			class="pointer-events-none fixed right-4 bottom-4 z-40 font-mono text-[10px] tracking-wider text-neutral-600/60 transition-opacity duration-1000 select-none {storyStore.isZoomed
				? 'opacity-0'
				: 'opacity-100'}"
		>
			click derecho: acercarse
		</div>
	{/if}

	<!-- Dev Controls Toolbar (Accessible via ?dev=1) -->
	{#if storyStore.devMode}
		<div
			class="fixed top-3 left-3 z-50 flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900/90 px-3 py-2 font-mono text-xs text-neutral-300 shadow-xl backdrop-blur-md"
		>
			<span class="font-bold text-amber-400">DEV MODE</span>
			<button
				onclick={() => {
					storyStore.resetProgress();
				}}
				class="cursor-pointer rounded bg-neutral-800 px-2 py-1 text-neutral-200 hover:bg-neutral-700"
			>
				Reset State
			</button>
			<button
				onclick={() => {
					storyStore.connectRemote();
					storyStore.markArtifactViewed('chat_player');
					storyStore.markArtifactViewed('chat_cfo');
					storyStore.markArtifactViewed('chat_wife');
					storyStore.markArtifactViewed('chat_group');
					storyStore.markArtifactViewed('final_trace_session');
				}}
				class="cursor-pointer rounded bg-emerald-950 px-2 py-1 text-emerald-300 hover:bg-emerald-900"
			>
				Unlock Ending
			</button>
			<button
				onclick={() => {
					storyStore.toggleZoom();
					soundEngine.playLeanShift(storyStore.isZoomed);
				}}
				class="cursor-pointer rounded bg-neutral-800 px-2 py-1 text-neutral-200 hover:bg-neutral-700"
			>
				Toggle Zoom ({storyStore.isZoomed ? 'IN' : 'OUT'})
			</button>
			<button
				onclick={() => {
					storyStore.isBlinking = true;
					setTimeout(() => (storyStore.isBlinking = false), 200);
				}}
				class="cursor-pointer rounded bg-neutral-800 px-2 py-1 text-neutral-200 hover:bg-neutral-700"
			>
				Test Blink
			</button>
			<button
				onclick={() => {
					storyStore.focusFatigue = storyStore.focusFatigue > 0 ? 0 : 0.85;
				}}
				class="cursor-pointer rounded bg-neutral-800 px-2 py-1 text-neutral-200 hover:bg-neutral-700"
			>
				Toggle Fatigue ({storyStore.focusFatigue > 0 ? 'ON' : 'OFF'})
			</button>
			<span class="text-neutral-500">
				Artifacts: {storyStore.viewedArtifacts.size} | Ending: {storyStore.endingAvailable
					? 'READY'
					: 'LOCKED'}
			</span>
		</div>
	{/if}
</div>
