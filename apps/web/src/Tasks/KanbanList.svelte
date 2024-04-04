<script lang="ts">
	export let list;
	import Icon from '@iconify/svelte';
	import KanbanCard from './KanbanCard.svelte';
</script>

<div class="card card-bordered card-compact w-96 bg-gray-50">
	<div class="card-body">
		<div class="flex justify-between items-center">
			<h3 class="card-title text-sm">{list.title} <span>({list.tasksCount})</span></h3>
			<button class="btn btn-sm btn-square" title="Menu"
				><Icon icon="heroicons:ellipsis-horizontal" /></button
			>
		</div>
		{#each list.tasks as task}
			<KanbanCard {task} />
		{/each}
		<div class="card-actions">
			<button class="btn btn-sm btn-outline w-full">Add Task <Icon icon="heroicons:plus" /></button>
		</div>
	</div>
</div>
