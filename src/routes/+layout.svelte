<script>
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>CASE UNRESOLVED — Caso Irresuelto</title>
	<meta
		name="description"
		content="Una experiencia narrativa interactiva en primera persona sobre la desaparición de un amigo, la presión financiera y los límites del silencio."
	/>
	<meta name="author" content="hyvnt" />
	<meta name="theme-color" content="#0a0a0a" />

	<!-- Favicon -->
	<link rel="icon" type="image/png" href="/cyp_icon.png" />
	<link rel="apple-touch-icon" href="/cyp_icon.png" />

	<!-- OpenGraph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="CASE UNRESOLVED — Caso Irresuelto" />
	<meta
		property="og:description"
		content="Una experiencia narrativa interactiva en primera persona sobre la desaparición de un amigo, la presión financiera y los límites del silencio."
	/>
	<meta property="og:image" content="/cyp_icon.png" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="CASE UNRESOLVED — Caso Irresuelto" />
	<meta
		name="twitter:description"
		content="Una experiencia narrativa interactiva en primera persona."
	/>
	<meta name="twitter:image" content="/cyp_icon.png" />
</svelte:head>

{@render children()}
