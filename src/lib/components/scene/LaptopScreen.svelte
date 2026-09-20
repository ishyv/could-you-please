<script>
	import { storyStore } from '$lib/story/store.svelte.js';
	import DesktopShell from '../os/DesktopShell.svelte';
	import SshBootTerminal from '../os/SshBootTerminal.svelte';

	let { onBoot = () => {} } = $props();
</script>

<div
	class="relative h-full min-h-0 w-full overflow-hidden bg-neutral-950 font-sans text-neutral-100"
>
	{#if !storyStore.booted}
		<!-- Unpowered dark display -->
		<button
			type="button"
			onclick={() => onBoot()}
			class="group absolute inset-0 flex cursor-pointer flex-col items-center justify-center bg-black/95 transition-colors hover:bg-black/90"
		>
			<div
				class="flex flex-col items-center gap-3 text-neutral-500 transition-colors group-hover:text-neutral-300"
			>
				<div
					class="relative flex h-12 w-12 items-center justify-center rounded-full border border-neutral-700/60 bg-neutral-900/50"
				>
					<svg
						class="h-6 w-6 transition-transform group-hover:scale-110"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
					>
						<path d="M12 2v10M18.36 6.64a9 9 0 1 1-12.73 0" />
					</svg>
					<span
						class="absolute -top-0.5 right-0.5 h-2 w-2 animate-ping rounded-full bg-blue-500 opacity-60"
					></span>
				</div>
				<span class="text-xs tracking-wider uppercase">Presiona para encender</span>
			</div>
		</button>
	{:else if !storyStore.remoteConnected}
		<!-- Local terminal SSH handshake -->
		<SshBootTerminal onConnected={() => storyStore.connectRemote()} />
	{:else}
		<!-- Remote GUI Workstation Desktop -->
		<DesktopShell />
	{/if}

	<!-- Glass screen reflection overlay -->
	<div
		class="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.025] to-transparent"
		style="mix-blend-mode: screen;"
	></div>
</div>
