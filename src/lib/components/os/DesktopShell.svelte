<script>
	import { storyStore } from '$lib/story/store.svelte.js';
	import AppWindow from './AppWindow.svelte';
	import ChatApp from '../apps/ChatApp.svelte';
	import DownloadsApp from '../apps/DownloadsApp.svelte';
	import ImagesApp from '../apps/ImagesApp.svelte';
	import HistoryApp from '../apps/HistoryApp.svelte';
	import NotesApp from '../apps/NotesApp.svelte';
	import FinalTraceApp from '../apps/FinalTraceApp.svelte';
	import { soundEngine } from '$lib/audio/soundEngine.js';

	/** @type {{ id: import('$lib/story/store.svelte.js').AppId, label: string, icon: string, badge?: string }[]} */
	const APPS = [
		{ id: 'chat', label: 'Mensajes', icon: '💬', badge: '!' },
		{ id: 'downloads', label: 'Descargas', icon: '📁' },
		{ id: 'images', label: 'Galería DCIM', icon: '🖼️' },
		{ id: 'history', label: 'Navegador Web', icon: '🌐' },
		{ id: 'notes', label: 'Notas de Texto', icon: '📝' },
		{ id: 'terminal', label: 'Registro de Sesión', icon: '⚡', badge: 'REC' }
	];

	/**
	 * @param {import('$lib/story/store.svelte.js').AppId} appId
	 */
	function handleOpenApp(appId) {
		soundEngine.playKeyClick();
		storyStore.openApp(appId);
	}

	function toggleAudio() {
		const isMuted = soundEngine.toggleMute();
		storyStore.audioMuted = isMuted;
	}
</script>

<div
	class="relative flex h-full min-h-0 w-full flex-col overflow-hidden bg-neutral-900 font-sans text-neutral-100 select-none"
>
	<!-- Top Desktop Panel Bar -->
	<div
		class="z-30 flex h-8 shrink-0 items-center justify-between border-b border-neutral-800 bg-neutral-950/90 px-3 font-mono text-[11px] text-neutral-400"
	>
		<!-- Left: Host indicator & Quick Launchers -->
		<div class="flex min-w-0 items-center gap-2 sm:gap-3">
			<div class="flex shrink-0 items-center gap-1.5 font-medium text-neutral-300">
				<span class="h-2 w-2 rounded-full bg-emerald-500/80 shadow-[0_0_5px_rgba(16,185,129,0.7)]"
				></span>
				<span class="hidden sm:inline">gabi@ws-infra-04</span>
				<span class="text-xs sm:hidden">gabi</span>
			</div>

			<div class="h-3 w-px bg-neutral-800"></div>

			<!-- Quick App Launchers in Top Bar -->
			<div class="no-scrollbar flex items-center gap-0.5 overflow-x-auto py-0.5 sm:gap-1">
				{#each APPS as app (app.id)}
					<button
						type="button"
						onclick={() => handleOpenApp(app.id)}
						class="flex cursor-pointer items-center gap-1 rounded px-1.5 py-0.5 text-xs transition-colors sm:px-2 {storyStore.activeApp ===
						app.id
							? 'bg-neutral-800 text-blue-400'
							: 'hover:bg-neutral-800 hover:text-neutral-200'}"
						title={app.label}
					>
						<span>{app.icon}</span>
						<span class="hidden text-[10px] whitespace-nowrap md:inline">{app.label}</span>
					</button>
				{/each}
			</div>
		</div>

		<!-- Right: Audio Mute / Clock -->
		<div class="flex shrink-0 items-center gap-2 pl-2 sm:gap-3">
			<!-- Sound Mute Toggle -->
			<button
				type="button"
				onclick={toggleAudio}
				class="cursor-pointer rounded px-1.5 py-0.5 text-[10px] text-neutral-400 hover:bg-neutral-800 hover:text-neutral-200"
				title={storyStore.audioMuted ? 'Activar sonido' : 'Silenciar sonido'}
			>
				<span class="hidden sm:inline"
					>{storyStore.audioMuted ? '🔇 Silenciado' : '🔊 Ambiente'}</span
				>
				<span class="sm:hidden">{storyStore.audioMuted ? '🔇' : '🔊'}</span>
			</button>

			<div class="h-3 w-px bg-neutral-800"></div>

			<span class="text-[10px] whitespace-nowrap text-neutral-300 sm:text-[11px]"
				>Vie 19 Sep, 03:55 AM</span
			>
		</div>
	</div>

	<!-- Desktop Surface -->
	<div class="relative min-h-0 flex-1 overflow-hidden p-4 sm:p-6">
		<!-- Wallpaper Background -->
		<div
			class="absolute inset-0 bg-radial from-neutral-800/90 via-neutral-900 to-neutral-950 opacity-95"
		></div>

		<div
			class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]"
		></div>

		<!-- Desktop Shortcut Icons Grid -->
		<div class="relative z-10 grid w-24 grid-cols-1 gap-3 sm:w-28 sm:gap-4">
			{#each APPS as app (app.id)}
				<button
					type="button"
					onclick={() => handleOpenApp(app.id)}
					class="group flex cursor-pointer flex-col items-center gap-1.5 rounded-lg p-2 transition-all hover:bg-neutral-800/60 focus:outline-none"
				>
					<div
						class="relative flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-700/60 bg-neutral-800/80 shadow-lg transition-transform group-hover:scale-105 group-hover:border-neutral-600 sm:h-12 sm:w-12"
					>
						<span class="text-xl sm:text-2xl">{app.icon}</span>
						{#if app.badge}
							<span
								class="absolute -top-1 -right-1 rounded-full bg-rose-600 px-1 py-0.5 font-mono text-[8px] font-bold text-white shadow"
							>
								{app.badge}
							</span>
						{/if}
					</div>
					<span
						class="w-full truncate text-center text-[10px] leading-tight font-medium tracking-tight text-neutral-300 drop-shadow group-hover:text-white sm:text-[11px]"
					>
						{app.label}
					</span>
				</button>
			{/each}
		</div>

		<!-- Active Window Layer (Centered Desktop App Window) -->
		{#if storyStore.activeApp}
			<div class="animate-window-in absolute inset-2 z-20 shadow-2xl sm:inset-3 md:inset-4">
				<AppWindow
					appId={storyStore.activeApp}
					title={APPS.find((a) => a.id === storyStore.activeApp)?.label || 'Aplicación'}
				>
					{#if storyStore.activeApp === 'chat'}
						<ChatApp />
					{:else if storyStore.activeApp === 'downloads'}
						<DownloadsApp />
					{:else if storyStore.activeApp === 'images'}
						<ImagesApp />
					{:else if storyStore.activeApp === 'history'}
						<HistoryApp />
					{:else if storyStore.activeApp === 'notes'}
						<NotesApp />
					{:else if storyStore.activeApp === 'terminal'}
						<FinalTraceApp />
					{/if}
				</AppWindow>
			</div>
		{/if}
	</div>
</div>

<style>
	@keyframes windowIn {
		from {
			opacity: 0;
			transform: scale(0.99);
		}
		to {
			opacity: 1;
			transform: scale(1);
		}
	}
	.animate-window-in {
		animation: windowIn 0.16s cubic-bezier(0.16, 1, 0.3, 1) forwards;
	}
</style>
