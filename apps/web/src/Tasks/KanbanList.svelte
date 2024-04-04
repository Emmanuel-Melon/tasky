<script lang="ts">
	export let list;
	import { createEventDispatcher } from 'svelte';
	import Icon from '@iconify/svelte';
	import KanbanCard from './KanbanCard.svelte';
	import AddKanbanTask from './AddKanbanTask.svelte';

	const dispatch = createEventDispatcher();
	let showAddTask = false;

	function toggleAddTask() {
		showAddTask = !showAddTask;
	}

	console.log(list);
</script>

<div class="card card-bordered card-compact  bg-gray-50 w-96 min-w-96">
	<div class="card-body" style="max-height: 70vh; overflow-y: auto;">
		<div class="flex justify-between items-center">
			<h3 class="card-title text-sm">{list.title}</h3>
			<button class="btn btn-sm btn-square" title="Menu"
				><Icon icon="heroicons:ellipsis-horizontal" /></button
			>
		</div>
		{#if list.tasks}
			{#each list?.tasks as task}
				<KanbanCard {task} />
			{/each}
		{/if}
		<div class="card-actions">
			{#if !showAddTask}
				<button class="btn btn-sm btn-outline w-full" on:click={toggleAddTask}
					>Add Task <Icon icon="heroicons:plus" /></button
				>
			{:else}
				<button class="btn btn-sm btn-outline" on:click={toggleAddTask}
					><Icon icon="heroicons:x-mark" /></button
				>
			{/if}
		</div>
		{#if showAddTask}
			<AddKanbanTask />
		{/if}
	</div>
</div>
