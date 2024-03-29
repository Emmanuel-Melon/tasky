<script lang="ts">
	import '../app.css';
	import { Navbar } from '@repo/ui';
</script>

<svelte:head>
	<title>Tasky</title>
	<meta name="description" content="Tasky" />
</svelte:head>

<body>
	<Navbar />
	<main class="min-h-screen-footer p-8">
		<slot />
	</main>
</body>
