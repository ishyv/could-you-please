<script>
	import { onMount } from 'svelte';
	import { storyStore } from '$lib/story/store.svelte.js';
	import { FINAL_TRACE } from '$lib/story/final-trace.js';

	onMount(() => {
		storyStore.markArtifactViewed(FINAL_TRACE.id);
	});
</script>

<div
	class="flex h-full min-h-0 w-full flex-col overflow-y-auto bg-neutral-950 p-4 font-mono text-xs text-neutral-300 sm:p-6"
>
	<div class="mb-4 border-b border-neutral-800 pb-3">
		<div class="flex flex-wrap items-center justify-between gap-2">
			<h2 class="text-xs font-semibold text-neutral-200 sm:text-sm">
				DIAGNÓSTICO DEL SISTEMA • ÚLTIMA SESIÓN REMOTA
			</h2>
			<span
				class="rounded border border-rose-800/80 bg-rose-950 px-2 py-0.5 text-[10px] whitespace-nowrap text-rose-300"
			>
				ESTADO ANÓMALO
			</span>
		</div>
		<p class="mt-1 text-[10px] text-neutral-500 sm:text-[11px]">
			Host: {FINAL_TRACE.remoteHost} (190.19.144.112)
		</p>
	</div>

	<div class="max-w-2xl space-y-3.5">
		<div
			class="grid grid-cols-1 gap-2.5 rounded border border-neutral-800 bg-neutral-900/60 p-3 sm:grid-cols-2 sm:gap-3"
		>
			<div>
				<span class="block text-[10px] text-neutral-500 uppercase">Fecha de inicio</span>
				<span class="text-xs text-neutral-200">{FINAL_TRACE.sessionDate}</span>
			</div>
			<div>
				<span class="block text-[10px] text-neutral-500 uppercase">Hora de inicio</span>
				<span class="text-xs text-neutral-200">{FINAL_TRACE.sessionTime}</span>
			</div>
			<div>
				<span class="block text-[10px] text-neutral-500 uppercase">Duración de sesión</span>
				<span class="text-xs text-amber-400">{FINAL_TRACE.duration}</span>
			</div>
			<div>
				<span class="block text-[10px] text-neutral-500 uppercase">Evento de cierre</span>
				<span class="text-xs text-rose-400">{FINAL_TRACE.status}</span>
			</div>
		</div>

		<div class="space-y-1.5 rounded border border-neutral-800 bg-neutral-900/40 p-3">
			<span class="block text-[10px] font-bold text-neutral-500 uppercase"
				>Último comando ejecutado en sesión</span
			>
			<div
				class="rounded border border-neutral-800/80 bg-black p-2.5 font-mono text-xs break-all whitespace-pre-wrap text-emerald-400"
			>
				$ {FINAL_TRACE.lastAction}
			</div>
		</div>

		<div class="space-y-1.5 rounded border border-neutral-800 bg-neutral-900/40 p-3">
			<span class="block text-[10px] font-bold text-neutral-500 uppercase"
				>Socket de red remanente</span
			>
			<div
				class="rounded border border-neutral-800/80 bg-black p-2.5 font-mono text-xs break-all text-neutral-300"
			>
				{FINAL_TRACE.unclosedSocket}
			</div>
		</div>

		<div class="space-y-1.5 rounded border border-neutral-800 bg-neutral-900/40 p-3">
			<span class="block text-[10px] font-bold text-neutral-500 uppercase"
				>Volcado del búfer no sincronizado</span
			>
			<div
				class="rounded border border-neutral-800/80 bg-black p-2.5 font-mono text-xs leading-relaxed break-all whitespace-pre-wrap text-neutral-400"
			>
				{FINAL_TRACE.unsentBuffer}
			</div>
		</div>

		<div
			class="border-t border-neutral-800/80 pt-3 text-[10px] leading-relaxed text-neutral-500 italic sm:text-[11px]"
		>
			Nota de la sesión: El equipo remoto continúa respondiendo a pings de enlace en la red local,
			pero no existen nuevos procesos de usuario ni actividad interactiva posterior a las 05:01 hs
			del 19 de septiembre.
		</div>
	</div>
</div>
