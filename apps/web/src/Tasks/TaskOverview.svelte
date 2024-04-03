<script lang="ts">
	import { goto } from '$app/navigation';
	export let task: any;
	import Icon from '@iconify/svelte';
	import { Avatar } from '@repo/ui';
	import { deleteTask } from '$lib/data/tasks';
	import { formatDateTime } from '@repo/lib/dates';
	import TaskOverviewContextMenu from './TaskOverviewContextMenu.svelte';

	const handleDelete = async () => {
		const res = await deleteTask(task.id);
	};

	const statusStyles = {
		ARCHIVED: 'warning',
		COMPLETED: 'success',
		CANCELLED: 'danger'
	} as const;
</script>

<div class="card card-bordered card-compact shadow-sm bg-base-100">
	<div class="card-body">
		<div class="space-y-2">
			<div class="flex items-center justify-between">
				<a href={`/tasks/${task.id}`} class="card-title link link-hover text-sm">{task.title}</a>
				<TaskOverviewContextMenu {task} />
			</div>
			<div class="flex items-center gap-2">
				<div class={`badge badge-${statusStyles[task.status]} gap-2 text-gray-500`}>
					{task.status}
				</div>
				{#if task.deadline}
					<div class="badge badge-md gap-2 text-error">
						<Icon icon="heroicons:calendar-days" />
						{formatDateTime(task.deadline)}
					</div>
				{/if}
			</div>
			<div class="flex items-center gap-4">
				<a
					class="link link-hover text-gray-500 text-xs gap-2 flex items-center"
					href={`/users/${task.Owner.id}`}><Icon icon="heroicons:user" /> {task.Owner.name}</a
				>
				<p class="text-gray-500 text-xs gap-2 flex items-center">
					<Icon icon="heroicons:clock" />
					{formatDateTime(task.createdAt)}
				</p>
			</div>
		</div>
		<p>{task.description}</p>
		<div class="card-actions justify-between items-center">
			{#if task.TaskAssignees.length <= 0}
				<div class="badge gap-2"><Icon icon="heroicons:user" /> Unassigned</div>
			{:else}
				<div class="flex gap-2">
					{#each task.TaskAssignees as assignee}
						<Avatar src={assignee.avatar} alt={assignee.name} />
					{/each}
				</div>
			{/if}
			<div class="flex gap-2">
				<div class="badge gap-2"><Icon icon="heroicons:chat-bubble-left" />3</div>
			</div>
		</div>
	</div>
</div>
