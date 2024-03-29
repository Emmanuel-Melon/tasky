<script lang="ts">
	import { Navbar } from '@repo/ui';
	import '../app.css';
</script>

<svelte:head>
	<title>Tasky</title>
	<meta name="description" content="Tasky" />
</svelte:head>

<Navbar />
<main class="min-h-screen-footer p-8">
  <slot />
</main>