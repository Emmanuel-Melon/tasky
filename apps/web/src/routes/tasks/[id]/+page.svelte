<script lang="ts">
	import { Avatar } from '@repo/ui';
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
	const {
		data: { task }
	} = $page;
</script>

<div class="card card-bordered card-compact shadow-sm w-3/4 m-auto">
	<div class="card-body">
		<div class="flex gap-4">
			<div class="flex-1 space-y-4">
				<h1 class="card-title">{task.title}: {task.id}</h1>
				<p>{task.description}</p>
				<div class="divider"></div>
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
					<div class="badge gap-2"><Icon icon="heroicons:check-circle" /> {task.status}</div>
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
	</div>
</div>
