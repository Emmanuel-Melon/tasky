<script lang="ts">
	import TaskOverview from './TaskOverview.svelte';
	import ListControls from './ListControls.svelte';
	import autoAnimate from '@formkit/auto-animate';
	export let tasks;
</script>

<div class="space-y-4">
	<ListControls />
	<div use:autoAnimate class="space-y-4">
		{#each tasks as task}
			<TaskOverview {task} />
		{/each}
	</div>
</div>
