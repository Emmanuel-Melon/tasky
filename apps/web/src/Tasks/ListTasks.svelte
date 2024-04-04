<script lang="ts">
	import { onDestroy } from 'svelte';
	import ListControls from './ListControls.svelte';
	import TasksEmptyState from './TasksEmptyState.svelte';
	import { selectedView } from './store';
	export let tasks: any;
	export let lists;

	import TasksBoardView from './TasksBoardView.svelte';
	import TasksGridView from './TasksGridView.svelte';
	import TasksListView from './TasksListView.svelte';

	let currentItem: number;

	const unsubscribe = selectedView.subscribe((value) => {
		currentItem = value - 1;
	});

	const items = [
		{
			value: 1,
			component: TasksListView,
			props: {
				tasks,
				lists
			}
		},
		{
			value: 2,
			component: TasksGridView,
			props: {
				tasks,
				lists
			}
		},
		{
			value: 3,
			component: TasksBoardView,
			props: {
				tasks,
				lists
			}
		}
	];

	onDestroy(unsubscribe);
</script>

<div class="space-y-2">
	<ListControls {tasks} />
	{#if tasks?.length === 0}
		<TasksEmptyState />
	{/if}
	{#if tasks?.length > 0}
		<svelte:component this={items[currentItem].component} {...items[currentItem].props} />
	{/if}
</div>
