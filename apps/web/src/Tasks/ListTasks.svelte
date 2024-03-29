<script lang="ts">
	import TaskOverview from './TaskOverview.svelte';
    import ListControls from './ListControls.svelte';
	const tasks = [
		{
			id: 1,
			title: '[TASK-2]: List Tasks',
			description: 'Build a tasks list',
			deadline: 'Friday 29 March'
		},
		{
			id: 2,
			title: '[TASK-3]: View Task Details',
			description: 'Build a tasks list',
			deadline: 'Friday 29 March'
		},
		{
			id: 3,
			title: '[TASK-4]: Edit Task',
			description: 'Build a tasks list',
			deadline: 'Friday 29 March'
		}
	];
</script>

<div class="space-y-4">
	<ListControls />
	{#each tasks as task}
		<TaskOverview {task} />
	{/each}
</div>
