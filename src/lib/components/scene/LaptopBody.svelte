<script>
	import { storyStore } from '$lib/story/store.svelte.js';
	import LaptopScreen from './LaptopScreen.svelte';
	import { soundEngine } from '../../audio/soundEngine.js';

	let { onBoot = () => {} } = $props();
	let earlyCloseHint = $state(false);
	/** @type {ReturnType<typeof setTimeout> | null} */
	let hintTimer = null;

	function handleCloseLid() {
		if (!storyStore.booted || storyStore.endingStarted) return;

		if (storyStore.endingAvailable) {
			soundEngine.playHingeClose();
			storyStore.triggerEnding();
			// After physical lid lands on base deck, transition to final blackout
			setTimeout(() => {
				storyStore.endingCompleted = true;
			}, 2500);
		} else {
			// Subtle immersion hint: player feels there is still unresolved material
			earlyCloseHint = true;
			if (hintTimer) clearTimeout(hintTimer);
			hintTimer = setTimeout(() => {
				earlyCloseHint = false;
			}, 3500);
		}
	}
</script>

<div
	class="laptop-assembly relative flex flex-col items-center select-none"
	style="perspective: 1400px;"
>
	<!-- SCREEN LID ASSEMBLY (35% larger: ~1240px x 720px, responsive) -->
	<div
		class="lid-container relative will-change-transform"
		style="
			transform-origin: bottom center;
			transform-style: preserve-3d;
			transform: {storyStore.endingStarted ? 'rotateX(-94deg)' : 'rotateX(0deg)'};
			transition: transform {storyStore.reducedMotion ? '0.15s' : '2.4s'} cubic-bezier(0.28, 1, 0.35, 1);
		"
	>
		<!-- OUTER 3D LID FRAME (Sized ~1240px x 720px) -->
		<div
			class="relative h-[min(720px,76vh)] w-[min(1240px,96vw)]"
			style="transform-style: preserve-3d;"
		>
			<!-- 1. FRONT FACE OF LID (Screen, Bezel, Webcam, Close button) -->
			<div
				class="lid-front pointer-events-auto absolute inset-0 flex flex-col rounded-t-2xl rounded-b-xs border-2 border-neutral-700/80 bg-neutral-900 p-3.5 shadow-2xl transition-all"
				style="
					backface-visibility: hidden;
					-webkit-backface-visibility: hidden;
					transform: translateZ(2px);
					box-shadow:
						0 25px 50px -12px rgba(0, 0, 0, 0.95),
						0 0 {storyStore.booted && !storyStore.endingStarted ? '45px' : '0px'}
							rgba(90, 145, 230, 0.18);
				"
			>
				<!-- Top Bezel Area: Webcam, Mic & Close Lid Grip -->
				<div class="relative flex h-6 w-full items-center justify-between px-4">
					<div class="flex items-center gap-2">
						<span class="h-1.5 w-1.5 rounded-full bg-neutral-700"></span>
					</div>

					<!-- Center Webcam & Status LED -->
					<div class="flex items-center gap-2">
						<span class="h-2 w-2 rounded-full border border-neutral-700 bg-neutral-800"></span>
						<span
							class="h-1.5 w-1.5 rounded-full transition-colors duration-500 {storyStore.booted &&
							!storyStore.endingStarted
								? 'bg-emerald-500/70'
								: 'bg-neutral-800'}"
						></span>
					</div>

					<!-- Close Laptop Affordance (Subtle Hinge/Lid Grip) -->
					{#if storyStore.booted && !storyStore.endingStarted}
						<button
							type="button"
							onclick={handleCloseLid}
							class="group flex cursor-pointer items-center gap-1.5 font-mono text-xs text-neutral-500 transition-colors hover:text-neutral-200"
							title={storyStore.endingAvailable
								? 'Bajar tapa de la laptop'
								: 'Aún hay conversaciones recientes por revisar'}
						>
							<span>[bajar tapa]</span>
							<svg
								class="h-4 w-4 transition-transform group-hover:translate-y-0.5"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
							>
								<path d="M6 9l6 6 6-6" />
							</svg>
						</button>
					{:else}
						<div></div>
					{/if}
				</div>

				<!-- Inner Screen Viewport -->
				<div
					class="relative min-h-0 flex-1 overflow-hidden rounded-xs border border-neutral-800/80 bg-black shadow-inner"
				>
					<LaptopScreen {onBoot} />

					<!-- Early close subtle warning toast -->
					{#if earlyCloseHint}
						<div
							class="pointer-events-none absolute bottom-12 left-1/2 -translate-x-1/2 rounded-md border border-neutral-700/80 bg-neutral-900/95 px-4 py-2 font-mono text-xs text-neutral-300 shadow-xl backdrop-blur-md transition-opacity duration-300"
						>
							Todavía hay mensajes y archivos de Gabriel sin revisar...
						</div>
					{/if}
				</div>

				<!-- Bottom Bezel Chin with subtle Logo -->
				<div class="flex h-6 w-full items-center justify-center">
					<span
						class="font-mono text-[11px] tracking-[0.25em] text-neutral-600 uppercase opacity-70"
					>
						ThinkPad X1 Extreme • Arch Linux
					</span>
				</div>
			</div>

			<!-- 2. BACK FACE OF LID (Physical Outer Lid Cover seen when laptop closes) -->
			<div
				class="lid-back pointer-events-none absolute inset-0 flex flex-col justify-between rounded-t-2xl rounded-b-xs border-2 border-neutral-700/80 bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-900 p-8 shadow-2xl select-none"
				style="
					backface-visibility: hidden;
					-webkit-backface-visibility: hidden;
					transform: rotateY(180deg) translateZ(2px);
					box-shadow:
						inset 0 1px 0 rgba(255, 255, 255, 0.08),
						0 35px 70px -15px rgba(0, 0, 0, 0.98);
				"
			>
				<!-- Top/Corner: ThinkPad Logo with Red Glowing LED Dot -->
				<div class="flex items-start justify-between">
					<div class="flex items-center gap-1.5 font-mono select-none">
						<span class="text-base font-bold tracking-tight text-neutral-400">ThinkPad</span>
						<span
							class="h-2 w-2 rounded-full bg-rose-600 shadow-[0_0_8px_rgba(225,29,72,0.9)]"
							title="ThinkPad LED"
						></span>
					</div>

					<div
						class="rounded border border-neutral-800/80 bg-neutral-900/40 px-2.5 py-1 font-mono text-[10px] tracking-widest text-neutral-600 uppercase"
					>
						Lenovo
					</div>
				</div>

				<!-- Center Subtle Texture Accent -->
				<div class="flex flex-col items-center justify-center opacity-20">
					<div class="h-px w-32 bg-neutral-700"></div>
				</div>

				<!-- Bottom Dual Metallic Hinge Joints -->
				<div class="flex items-end justify-between px-12 pb-1">
					<div class="h-4 w-20 rounded-t-xs border-t border-neutral-600/60 bg-neutral-800"></div>
					<div class="font-mono text-[9px] tracking-widest text-neutral-700 uppercase">
						Designed in Japan
					</div>
					<div class="h-4 w-20 rounded-t-xs border-t border-neutral-600/60 bg-neutral-800"></div>
				</div>
			</div>
		</div>
	</div>

	<!-- HINGE CYLINDER CONNECTOR -->
	<div
		class="relative -mt-0.5 h-3.5 w-[min(1250px,96.5vw)] rounded-xs border-t border-b border-neutral-700/60 bg-gradient-to-r from-neutral-800 via-neutral-800 to-neutral-800 shadow-md"
	>
		<div class="flex h-full w-full justify-between px-20">
			<div class="h-full w-14 bg-neutral-700/80 shadow-inner"></div>
			<div class="h-full w-14 bg-neutral-700/80 shadow-inner"></div>
		</div>
	</div>

	<!-- LAPTOP BASE CHASSIS (Keyboard Deck & Trackpad ~1280px x 170px) -->
	<div
		class="relative -mt-0.5 h-[170px] w-[min(1280px,98vw)] rounded-b-2xl border-t border-neutral-700/60 bg-gradient-to-b from-neutral-800 via-neutral-900 to-neutral-950 px-10 py-4 shadow-[0_35px_70px_-15px_rgba(0,0,0,0.98)]"
	>
		<!-- Keyboard Well Silhouette -->
		<div
			class="flex h-20 w-full items-center justify-between rounded-lg border border-neutral-800/80 bg-neutral-950/80 px-6 shadow-inner"
		>
			<!-- Keyboard Rows Block Representation -->
			<div class="flex flex-1 flex-col gap-1.5 opacity-40">
				<div class="flex gap-1.5">
					{#each [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] as key (key)}
						<div class="h-2.5 flex-1 rounded-xs bg-neutral-800"></div>
					{/each}
				</div>
				<div class="flex gap-1.5">
					{#each [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as key (key)}
						<div class="h-2.5 flex-1 rounded-xs bg-neutral-800"></div>
					{/each}
				</div>
				<div class="flex items-center gap-1.5">
					<div class="h-2.5 flex-3 rounded-xs bg-neutral-800"></div>
					<!-- TrackPoint Red Dot in center -->
					<div class="h-2 w-2 rounded-full bg-rose-600 shadow-[0_0_4px_rgba(225,29,72,0.8)]"></div>
					<div class="h-2.5 flex-4 rounded-xs bg-neutral-800"></div>
				</div>
			</div>

			<!-- Physical Power Button with subtle LED -->
			<button
				type="button"
				onclick={() => {
					if (!storyStore.booted) onBoot();
				}}
				class="ml-8 flex cursor-pointer items-center gap-2 rounded px-3 py-1.5 text-xs text-neutral-500 hover:text-neutral-300"
			>
				<span
					class="h-2.5 w-2.5 rounded-full transition-colors duration-500 {storyStore.booted &&
					!storyStore.endingStarted
						? 'bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]'
						: 'animate-pulse bg-neutral-700'}"
				></span>
				<span class="font-mono text-[11px] font-semibold tracking-wider">POWER</span>
			</button>
		</div>

		<!-- Trackpad & Dual Click Buttons Silhouette -->
		<div class="mx-auto mt-2.5 flex flex-col items-center">
			<div class="flex w-52 justify-between gap-1">
				<div class="h-1.5 flex-1 rounded-t-xs bg-neutral-800/80"></div>
				<div class="h-1.5 w-4 rounded-t-xs bg-rose-900/60"></div>
				<div class="h-1.5 flex-1 rounded-t-xs bg-neutral-800/80"></div>
			</div>
			<div
				class="h-12 w-52 rounded-b-md border border-neutral-800/80 bg-neutral-950/60 shadow-inner"
			></div>
		</div>
	</div>
</div>
