<script lang="ts">
	import '../app.css';
</script>

<svelte:head>
	<title>Tasky</title>
	<meta name="description" content="Tasky" />
</svelte:head>

<div class="app">
	<div class="md:ml-16 lg:ml-60">
		<main class="min-h-screen-footer">
			<slot />
		</main>
	</div>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
