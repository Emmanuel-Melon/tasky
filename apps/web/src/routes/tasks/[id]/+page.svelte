<script lang="ts">
	import { Avatar, Card } from '@repo/ui';
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
	import TaskComments from '../../../Tasks/TaskComments.svelte';
	const {
		data: { task }
	} = $page;

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

    console.log(badgeColor);
</script>

<section class="space-y-2">
	<div class="flex justify-between items-center">
		<div class="flex gap-2">
			<button class="btn btn-sm"><Icon icon="heroicons:arrow-small-left" /> Back</button>
			<h1 class="card-title">{task.title}: {task.id}</h1>
		</div>
		<div class="flex gap-2">
			<button class="btn btn-sm btn-warning"><Icon icon="heroicons:trash" /> Delete Task</button>
		</div>
	</div>
	<Card>
		<div class="flex gap-4">
			<div class="flex-1 space-y-4">
				<h2 class="card-title text-sm">{task.title}: {task.id}</h2>
				<p>{task.description}</p>
				<div class="space-y-2">
					<div class="flex gap-2 items-center">
						<Icon icon="heroicons:arrow-small-right" />
						<h3 class="text-sm">Comments</h3>
						<div class="badge gap-2"><Icon icon="heroicons:chat-bubble-left" /> 3</div>
					</div>

					<TaskComments {task} />
				</div>
				<div class="flex items-center gap-4">
					<figure>
						<Avatar alt="Emmanuel Gatwech" />
					</figure>
					<input type="text" placeholder="Add Comment" class="input input-sm w-full" />
				</div>
			</div>
			<div class="flex-2 w-96 bg-gray-50 p-4 space-y-4 shadow-sm rounded-md">
				<div class="flex justify-between items-center">
					<p>Status</p>
					<div class={`badge gap-2 bg-[${badgeColor}]`}>
						{task.status}
					</div>
				</div>
				<div class="flex justify-between items-center">
					<p>Created</p>
					<div class="badge gap-2"><Icon icon="heroicons:clock" /> {task.createdAt}</div>
				</div>
				<div class="flex justify-between items-center">
					<p>Due Date</p>
					<div class="badge gap-2"><Icon icon="heroicons:calendar-days" /> {task.deadline}</div>
				</div>
				<div class="flex justify-between items-center">
					<p>Priority</p>
					<div class="badge gap-2"><Icon icon="heroicons:document-arrow-up" /> Low</div>
				</div>
				<div class="space-y-2">
					<p>Labels</p>
					<div class="space-y-2">
						<div class="badge badge-info">Backend</div>
						<div class="badge badge-success">Architecture</div>
						<div class="badge badge-warning">Sprint 2</div>
					</div>
				</div>
			</div>
		</div>
	</Card>
</section>
