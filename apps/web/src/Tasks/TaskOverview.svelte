<script lang="ts">
	export let task: any;
	import Icon from '@iconify/svelte';
	import { Avatar } from '@repo/ui';
	import { deleteTask } from '$lib/data/tasks';
	import { formatDateTime } from '@repo/lib/dates';
	import TaskOverviewContextMenu from './TaskOverviewContextMenu.svelte';

	const handleDelete = async () => {
		const res = await deleteTask(task.id);
	};
</script>

<div class="card card-bordered card-compact shadow-sm bg-base-100">
	<div class="card-body">
		<div class="badge badge-outline gap-2 text-gray-500">
			<Icon icon="heroicons:clock" /> {formatDateTime(task.createdAt)}
		</div>
		<div class="flex items-center justify-between">
			<div>
				<h3 class="card-title"><a href={`/tasks/${task.id}`}>{task.title}</a></h3>
			</div>
			<TaskOverviewContextMenu task={task}/>
		</div>
		<p>{task.description}</p>
		<div>
			{#if task.TaskAssignees.length <= 0}
				<div class="badge gap-2"><Icon icon="heroicons:user" /> Unassigned</div>
			{:else}
				<div class="flex gap-2">
					{#each task.TaskAssignees as assignee}
						<Avatar src={assignee.avatar} alt={assignee.name} />
					{/each}
				</div>
			{/if}
		</div>
		<div class="card-actions justify-between items-center">
			<div class="flex gap-2 items-center">
				<div class="flex items-center gap-2">
					<Avatar alt={task.Owner.name} />
					<a class="link gap-2 flex items-center" href={`/users/${task.Owner.id}`}
						>{task.Owner.name}</a
					>
				</div>
				{#if task.deadline}
					<div class="badge badge-md gap-2">
						<Icon icon="heroicons:calendar-days" />
						{task.deadline}
					</div>
				{/if}
			</div>
			<div class="flex gap-2">
				<div class="badge gap-2"><Icon icon="heroicons:chat-bubble-left" />3</div>
			</div>
		</div>
	</div>
</div>
