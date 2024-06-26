<script lang="ts">
	import { Avatar, Card } from '@repo/ui';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import Icon from '@iconify/svelte';
	import { formatDateTime } from '@repo/lib/dates';
	import { deleteTask } from '$lib/data/tasks';
	import TaskComments from '../../../Tasks/TaskComments.svelte';
	import DeleteTaskButton from '../../../Tasks/DeleteTaskButton.svelte';
	const {
		data: { task }
	} = $page;

	const formattedDate = formatDateTime(task.createdAt);

	interface StatusColors {
		[key: string]: string;
	}
	const statusColors: StatusColors = {
		ARCHIVED: '#800080', // Purple
		BLOCKED: '#FFA500', // Orange
		COMPLETED: '#008000', // Green
		CANCELLED: '#FF0000' // Red
	};

	const badgeColor = statusColors[task?.status];
</script>

<section class="space-y-2">
	<div class="flex justify-between items-center">
		<div class="flex gap-2">
			<button class="btn btn-sm btn-ghost"
				><Icon icon="heroicons:arrow-small-left" on:click={async () => await goto("/")} /> Back</button
			>
		</div>
		<div class="flex gap-2">
			<a href={`/tasks/${task.id}/edit`} class="btn btn-sm btn-ghost"
			><Icon icon="heroicons:pencil" />Edit Task</a
		>
			<DeleteTaskButton taskId={task.id} />
		</div>
	</div>
	<Card>
		<div class="flex gap-4">
			<div class="flex-1 space-y-4">
				<h2 class="card-title text-sm">{task.title}: {task.id}</h2>
				<p>{task.description}</p>
				<div class="space-y-2">
					<TaskComments {task} />
				</div>
			</div>
			<div class="flex-2 w-96 bg-gray-50 p-4 space-y-4 shadow-sm rounded-md">
				<div class="flex justify-between items-center">
					<p class="text-gray-500">Status</p>
					<div class={`badge gap-2 bg-[${badgeColor}]`}>
						{task.status}
					</div>
				</div>
				<div class="flex justify-between items-center">
					<p class="text-gray-500">Created</p>
					<div class="badge gap-2">
						<Icon icon="heroicons:clock" />
						{formatDateTime(task.createdAt)}
					</div>
				</div>
				{#if task.deadline}
				<div class="flex justify-between items-center">
					<p class="text-gray-500">Deadline</p>
					<div class="badge gap-2"><Icon icon="heroicons:calendar-days" /> {formatDateTime(task?.deadline)}</div>
				</div>
				{/if}
				{#if task.priority}
				<div class="flex justify-between items-center">
					<p class="text-gray-500">Priority</p>
					<div class="badge gap-2"><Icon icon="heroicons:document-arrow-up" /> {task.priority}</div>
				</div>
				{/if}
				<div class="space-y-2">
					<p class="text-gray-500">Labels</p>
					<div class="space-y-2">
						{#each task.Labels as label}
							<div class="badge badge-warning">Sprint 2</div>
						{/each}
					</div>
				</div>
				<div class="flex justify-between items-center">
					<p class="text-gray-500">Assignees</p>
					<div class="badge gap-2"><Icon icon="heroicons:user" /> {task.deadline}</div>
				</div>
			</div>
		</div>
	</Card>
</section>
