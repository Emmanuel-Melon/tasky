<script lang="ts">
	export let task: any;
	import Icon from '@iconify/svelte';
	import { Avatar } from '@repo/ui';
	import { deleteTask, updateTask } from '$lib/data/tasks';
	import DeleteTaskButton from './DeleteTaskButton.svelte';

	const onDeleteTask = async () => {
		const res = await deleteTask(task.id);
	};

	const onMarkTaskCompleted = async () => {
		const res = await updateTask(task.id, {
			status: 'COMPLETED'
		});
	};
</script>

<div class="dropdown dropdown-end">
	<div tabIndex={0} role="button" class="btn m-1 btn-ghost btn btn-sm btn-squared">
		<Icon icon="heroicons:ellipsis-horizontal" />
	</div>
	<ul
		tabIndex={0}
		class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 space-y-2"
	>
		<li>
			<button class="btn btn-sm btn-ghost text-start w-full" on:click={onMarkTaskCompleted}
				><Icon icon="heroicons:check-circle" /> Mark Completed</button
			>
		</li>
		<li>
			<a href={`/tasks/${task.id}/edit`} class="btn btn-sm btn-ghost text-start w-full"
				><Icon icon="heroicons:pencil" /> Edit Task</a
			>
		</li>
		<li>
			<DeleteTaskButton taskId={task.id} />
		</li>
	</ul>
</div>
