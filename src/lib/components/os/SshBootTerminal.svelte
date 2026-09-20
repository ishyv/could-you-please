<script>
	import { onMount } from 'svelte';
	import { soundEngine } from '../../audio/soundEngine.js';

	let { onConnected = () => {} } = $props();

	const lines = [
		'marcos@thinkpad:~$ ssh -p 2222 gabi@ws-infra-04.corp.internal',
		'Connecting to ws-infra-04.corp.internal (190.19.144.112)...',
		'Authenticated with ~/.ssh/gabi_corp_key (Gabriel Vega - Workstation).',
		'Last login: Thu Sep 17 03:41:09 2026 from 190.19.144.112',
		'Session established on remote workstation ws-infra-04.',
		'Initializing X11 / Waypipe remote desktop forwarder... [OK]',
		'Mounting remote user profile (/home/gabi)...'
	];

	/** @type {string[]} */
	let displayedLines = $state([]);
	let isComplete = $state(false);

	onMount(() => {
		let currentLine = 0;

		const interval = setInterval(() => {
			if (currentLine < lines.length) {
				displayedLines = [...displayedLines, lines[currentLine]];
				soundEngine.playKeyClick();
				currentLine++;
			} else {
				clearInterval(interval);
				isComplete = true;
				// Automatically forward after a brief moment
				setTimeout(() => {
					onConnected();
				}, 1100);
			}
		}, 380);

		return () => clearInterval(interval);
	});
</script>

<div
	class="flex h-full min-h-0 w-full flex-col bg-neutral-950 p-6 font-mono text-sm text-neutral-300"
>
	<!-- Terminal Chrome -->
	<div
		class="mb-4 flex items-center justify-between border-b border-neutral-800 pb-2 text-xs text-neutral-500"
	>
		<div class="flex items-center gap-2">
			<span class="h-2.5 w-2.5 rounded-full bg-neutral-700"></span>
			<span class="h-2.5 w-2.5 rounded-full bg-neutral-700"></span>
			<span class="h-2.5 w-2.5 rounded-full bg-neutral-700"></span>
			<span class="ml-2 text-neutral-400">bash — 80x24</span>
		</div>
		<button
			type="button"
			onclick={() => onConnected()}
			class="cursor-pointer text-[11px] text-neutral-500 hover:text-neutral-300"
		>
			[Saltar intro]
		</button>
	</div>

	<!-- Output lines -->
	<div class="min-h-0 flex-1 space-y-1.5 overflow-y-auto">
		{#each displayedLines as line, idx (idx)}
			<div class="leading-relaxed {idx === 0 ? 'text-emerald-400' : 'text-neutral-300'}">
				{line}
			</div>
		{/each}

		{#if !isComplete}
			<div class="flex items-center gap-1 text-emerald-400">
				<span>_</span>
			</div>
		{:else}
			<div class="mt-4 flex animate-pulse items-center gap-2 text-blue-400">
				<span>Abriendo escritorio remoto...</span>
			</div>
		{/if}
	</div>
</div>
