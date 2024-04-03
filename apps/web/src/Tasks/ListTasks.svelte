<script lang="ts">
	import TaskOverview from './TaskOverview.svelte';
	import ListControls from './ListControls.svelte';
	import autoAnimate from '@formkit/auto-animate';
	import TasksEmptyState from './TasksEmptyState.svelte';
	export let tasks;
	export let view = 'grid';
	export let onLayoutChange = (layout: string) => {
		view = layout;
	};

	$: view;
</script>

<div class="space-y-2">
	<ListControls {tasks} {onLayoutChange} {view} />
	{#if tasks?.length === 0}
		<TasksEmptyState />
	{/if}
	{#if tasks?.length > 0}
		<div use:autoAnimate class={`${view === 'grid' ? 'grid grid-cols-3 gap-2' : 'space-y-2'}`}>
			{#each tasks as task}
				<TaskOverview {task} />
			{/each}
		</div>
	{/if}
</div>
