<script>
	import { storyStore } from '$lib/story/store.svelte.js';
	import { STORY_DOWNLOADS } from '$lib/story/downloads.js';
	import { soundEngine } from '$lib/audio/soundEngine.js';

	/** @type {import('$lib/story/types').DownloadEntry | null} */
	let selectedFile = $state(STORY_DOWNLOADS[0]);

	/**
	 * @param {import('$lib/story/types').DownloadEntry} file
	 */
	function selectFile(file) {
		soundEngine.playKeyClick();
		selectedFile = file;
		storyStore.markArtifactViewed(file.id);
	}
</script>

<div class="flex h-full min-h-0 w-full divide-x divide-neutral-800 bg-neutral-900 text-neutral-100">
	<!-- Downloads File Table -->
	<div class="flex h-full min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
		<!-- Toolbar -->
		<div
			class="flex h-10 shrink-0 items-center justify-between border-b border-neutral-800 bg-neutral-950/50 px-3 font-mono text-xs text-neutral-400 sm:px-4"
		>
			<span class="truncate">Directorio: /home/gabi/Descargas</span>
			<span class="shrink-0 text-neutral-500">{STORY_DOWNLOADS.length} elementos</span>
		</div>

		<!-- File List Table (scrollable container) -->
		<div class="min-h-0 flex-1 overflow-auto">
			<table class="w-full min-w-[340px] text-left text-xs">
				<thead
					class="sticky top-0 z-10 border-b border-neutral-800/80 bg-neutral-950/60 font-mono text-[10px] text-neutral-500 uppercase"
				>
					<tr>
						<th class="p-2 pl-3 sm:p-2.5 sm:pl-4">Archivo</th>
						<th class="p-2 sm:p-2.5">Fecha</th>
						<th class="hidden p-2 sm:table-cell sm:p-2.5">Tamaño</th>
						<th class="p-2 pr-3 sm:p-2.5 sm:pr-4">Categoría</th>
					</tr>
				</thead>
				<tbody class="divide-y divide-neutral-800/40">
					{#each STORY_DOWNLOADS as file (file.id)}
						<tr
							onclick={() => selectFile(file)}
							class="cursor-pointer transition-colors {selectedFile?.id === file.id
								? 'bg-neutral-800/90'
								: 'hover:bg-neutral-800/50'}"
						>
							<td class="p-2 pl-3 font-mono font-medium text-neutral-200 sm:p-2.5 sm:pl-4">
								<div class="flex min-w-0 items-center gap-1.5">
									<span class="shrink-0 text-neutral-500">📄</span>
									<span class="truncate">{file.filename}</span>
								</div>
							</td>
							<td
								class="p-2 font-mono text-[10px] whitespace-nowrap text-neutral-400 sm:p-2.5 sm:text-[11px]"
							>
								{file.dateLabel}
							</td>
							<td
								class="hidden p-2 font-mono text-[10px] whitespace-nowrap text-neutral-400 sm:table-cell sm:p-2.5 sm:text-[11px]"
							>
								{file.size}
							</td>
							<td class="p-2 pr-3 whitespace-nowrap sm:p-2.5 sm:pr-4">
								{#if file.category === 'ordinary'}
									<span
										class="rounded bg-neutral-800 px-1.5 py-0.5 font-mono text-[9px] text-neutral-400 sm:text-[10px]"
									>
										Personal
									</span>
								{:else if file.category === 'work'}
									<span
										class="rounded border border-blue-800/50 bg-blue-950/70 px-1.5 py-0.5 font-mono text-[9px] text-blue-300 sm:text-[10px]"
									>
										Laboral
									</span>
								{:else if file.category === 'security'}
									<span
										class="rounded border border-amber-800/50 bg-amber-950/70 px-1.5 py-0.5 font-mono text-[9px] text-amber-300 sm:text-[10px]"
									>
										Auditoría
									</span>
								{:else}
									<span
										class="rounded border border-rose-800/50 bg-rose-950/70 px-1.5 py-0.5 font-mono text-[9px] text-rose-300 sm:text-[10px]"
									>
										Sospechoso
									</span>
								{/if}
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>

	<!-- File Details Side Panel -->
	{#if selectedFile}
		<div
			class="flex h-full min-h-0 w-60 shrink-0 flex-col justify-between overflow-y-auto bg-neutral-950/60 p-3 sm:w-72 sm:p-4"
		>
			<div class="space-y-3">
				<div class="border-b border-neutral-800 pb-2">
					<h3 class="font-mono text-xs font-semibold break-all text-neutral-200">
						{selectedFile.filename}
					</h3>
					<p class="mt-1 font-mono text-[10px] text-neutral-500">ID: {selectedFile.id}</p>
				</div>

				<div class="space-y-2 font-mono text-xs">
					<div>
						<span class="block text-[10px] text-neutral-500 uppercase">Origen de descarga</span>
						<span class="text-[11px] break-all text-neutral-300">{selectedFile.source}</span>
					</div>

					<div>
						<span class="block text-[10px] text-neutral-500 uppercase">Fecha y Hora</span>
						<span class="text-[11px] text-neutral-300"
							>{selectedFile.timestamp.replace('T', ' ')}</span
						>
					</div>

					<div>
						<span class="block text-[10px] text-neutral-500 uppercase">Tamaño</span>
						<span class="text-[11px] text-neutral-300">{selectedFile.size}</span>
					</div>

					<div>
						<span class="block text-[10px] text-neutral-500 uppercase">Clasificación</span>
						<span class="text-[11px] text-neutral-300 capitalize">{selectedFile.category}</span>
					</div>
				</div>
			</div>

			<div
				class="mt-4 rounded border border-neutral-800 bg-neutral-900/80 p-2.5 font-mono text-[11px] text-neutral-400"
			>
				{#if selectedFile.category === 'suspicious'}
					<span class="mb-1 block font-bold text-rose-400">ALERTA FORENSE:</span>
					Herramienta de tunelización no autorizada en la política de workstation corporativa.
				{:else if selectedFile.category === 'security'}
					<span class="mb-1 block font-bold text-amber-400">HERRAMIENTA DE RED:</span>
					Paquete de captura y análisis de paquetes descargado fuera de horario laboral.
				{:else}
					<span class="mb-1 block font-bold text-neutral-400">REGISTRO ESTÁNDAR:</span>
					Archivo descargado mediante navegador web local.
				{/if}
			</div>
		</div>
	{/if}
</div>
