<script lang="ts">
	import TaskOverview from './TaskOverview.svelte';
	import ListControls from './ListControls.svelte';
	import autoAnimate from '@formkit/auto-animate';
	import TasksEmptyState from './TasksEmptyState.svelte';
	export let tasks;
</script>

<div class="space-y-4">
	{#if tasks.length === 0} 
	<TasksEmptyState />
{/if}
	{#if tasks.length > 0} 
	<ListControls />
	<div use:autoAnimate class="space-y-4">
		{#each tasks as task}
			<TaskOverview {task} />
		{/each}
	</div>
	
	{/if}
</div>
