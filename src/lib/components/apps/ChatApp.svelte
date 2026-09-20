<script>
	import { storyStore } from '$lib/story/store.svelte.js';
	import { STORY_CHATS } from '$lib/story/chats.js';
	import { CHARACTERS } from '$lib/story/characters.js';
	import { soundEngine } from '$lib/audio/soundEngine.js';

	let activeThread = $derived(
		STORY_CHATS.find((t) => t.id === storyStore.activeChatThreadId) || STORY_CHATS[0]
	);

	/**
	 * @param {string} threadId
	 */
	function selectThread(threadId) {
		soundEngine.playKeyClick();
		storyStore.selectChatThread(threadId);
	}
</script>

<div class="flex h-full min-h-0 w-full bg-neutral-900 text-neutral-100">
	<!-- Left Thread List Sidebar -->
	<div
		class="flex h-full min-h-0 w-52 shrink-0 flex-col border-r border-neutral-800 bg-neutral-950/60 sm:w-60 md:w-64"
	>
		<div class="border-b border-neutral-800 p-2.5 sm:p-3">
			<div class="flex items-center justify-between">
				<span class="text-xs font-semibold tracking-wider text-neutral-400 uppercase"
					>Conversaciones</span
				>
				<span class="font-mono text-[10px] text-neutral-500">{STORY_CHATS.length} hilos</span>
			</div>
		</div>

		<div class="min-h-0 flex-1 divide-y divide-neutral-800/40 overflow-y-auto">
			{#each STORY_CHATS as thread (thread.id)}
				<button
					type="button"
					onclick={() => selectThread(thread.id)}
					class="flex w-full cursor-pointer flex-col gap-1 p-2.5 text-left transition-colors sm:p-3 {storyStore.activeChatThreadId ===
					thread.id
						? 'border-l-2 border-blue-500 bg-neutral-800/80'
						: 'hover:bg-neutral-800/60'}"
				>
					<div class="flex items-center justify-between gap-1">
						<span class="truncate text-xs font-medium text-neutral-200">{thread.title}</span>
						<span class="shrink-0 font-mono text-[10px] text-neutral-500"
							>{thread.lastTimestamp.split(',')[0]}</span
						>
					</div>
					<p class="line-clamp-1 text-[11px] leading-snug break-all text-neutral-400">
						{thread.lastMessagePreview}
					</p>
				</button>
			{/each}
		</div>
	</div>

	<!-- Right Active Chat Thread -->
	<div class="flex h-full min-h-0 min-w-0 flex-1 flex-col overflow-hidden bg-neutral-900">
		<!-- Thread Header -->
		<div
			class="flex h-11 shrink-0 items-center justify-between border-b border-neutral-800 bg-neutral-950/40 px-3 sm:h-12 sm:px-4"
		>
			<div class="min-w-0 pr-2">
				<h2 class="truncate text-xs font-semibold text-neutral-200 sm:text-sm">
					{activeThread.title}
				</h2>
				<p class="truncate font-mono text-[10px] text-neutral-400">{activeThread.subtitle}</p>
			</div>
			<div class="flex shrink-0 items-center gap-1.5">
				<span class="h-2 w-2 rounded-full bg-neutral-600"></span>
				<span class="font-mono text-[10px] text-neutral-500">Desconectado</span>
			</div>
		</div>

		<!-- Message Stream -->
		<div class="min-h-0 flex-1 space-y-3 overflow-y-auto p-3 sm:p-4">
			{#each activeThread.messages as msg, idx (msg.id)}
				{@const isGabriel = msg.authorId === 'FRIEND'}
				{@const isPlayer = msg.authorId === 'PLAYER'}
				{@const showDateHeader =
					idx === 0 || activeThread.messages[idx - 1].dateLabel !== msg.dateLabel}

				{#if showDateHeader}
					<div class="my-2 flex items-center justify-center">
						<span
							class="rounded bg-neutral-800/80 px-2 py-0.5 font-mono text-[10px] text-neutral-400"
						>
							{msg.dateLabel}
						</span>
					</div>
				{/if}

				<div class="flex flex-col {isGabriel ? 'items-end' : 'items-start'}">
					<div class="mb-0.5 flex items-baseline gap-1.5">
						<span
							class="text-[10px] font-medium {isGabriel
								? 'text-blue-400'
								: isPlayer
									? 'text-emerald-400'
									: 'text-neutral-400'}"
						>
							{CHARACTERS[msg.authorId]?.displayName || msg.authorId}
						</span>
						<span class="font-mono text-[9px] text-neutral-500">{msg.timeLabel}</span>
					</div>
					<div
						class="max-w-[85%] rounded-lg px-3 py-2 text-xs leading-relaxed break-words whitespace-pre-wrap shadow-xs sm:max-w-[78%] sm:text-[13px] {isGabriel
							? 'border border-blue-800/50 bg-blue-900/40 text-neutral-100'
							: isPlayer
								? 'border border-emerald-900/50 bg-emerald-950/40 text-neutral-100'
								: 'border border-neutral-700/50 bg-neutral-800/80 text-neutral-200'}"
					>
						{msg.text}
					</div>
				</div>
			{/each}
		</div>

		<!-- Read-only footer banner -->
		<div
			class="flex shrink-0 items-center justify-between border-t border-neutral-800 bg-neutral-950/60 p-2 px-3 font-mono text-[10px] text-neutral-500 sm:p-2.5 sm:px-4 sm:text-[11px]"
		>
			<span class="truncate">[Modo auditoría remota — Sólo lectura]</span>
			<span class="hidden text-[10px] text-neutral-600 sm:inline"
				>Última sincronización: 19/09 03:52</span
			>
		</div>
	</div>
</div>
