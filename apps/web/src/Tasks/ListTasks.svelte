<script lang="ts">
	import ListControls from './ListControls.svelte';
	import TasksEmptyState from './TasksEmptyState.svelte';
	export let tasks;
	export let lists;
	export let view = 'grid';
	export let onLayoutChange = (layout: string) => {
		view = layout;
	};

	import TasksBoardView from './TasksBoardView.svelte';
	import TasksGridView from './TasksGridView.svelte';
	import TasksListView from './TasksListView.svelte';

	$: view;
</script>

<div class="space-y-2">
	<ListControls {tasks} {onLayoutChange} {view} />
	{#if tasks?.length === 0}
		<TasksEmptyState />
	{/if}
	{#if tasks?.length > 0}
    {#if view === "list"}
      <div data-animate="true">
        <TasksListView {tasks} />
      </div>
    {:else if view === "grid"}
      <div data-animate="true">
        <TasksGridView {tasks} />
      </div>
    {:else if view === "board"}
      <div data-animate="true">
        <TasksBoardView {lists} />
      </div>
    {/if}
	{/if}
</div>
