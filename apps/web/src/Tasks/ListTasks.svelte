<script lang="ts">
    import Icon from '@iconify/svelte';
	import TaskOverview from './TaskOverview.svelte';
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
    <div class="flex items-center justify-between">
        <div class="">
            <h3 class="text-xl">My Tasks</h3>
        </div>
        <div class="">
            <button class="btn btn-primary">Add Task <Icon icon="heroicons:plus-circle" /></button>
        </div>
    </div>
	{#each tasks as task}
		<TaskOverview {task} />
	{/each}
</div>
