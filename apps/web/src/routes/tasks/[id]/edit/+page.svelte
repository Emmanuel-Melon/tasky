<script lang="ts">
	import { page } from '$app/stores';
	/** @type {import('./$types').PageData} */
	import { enhance } from '$app/forms';
	import Icon from '@iconify/svelte';
	import DeleteTaskButton from '../../../../Tasks/DeleteTaskButton.svelte';

	const {
		data: { task }
	} = $page;

    
    let dateObject = new Date(task.deadline);
    console.log(new Date(task.deadline).toISOString().slice(0, 10));
</script>

<section class="space-y-4">
	<div class="flex items-center justify-between">
		<div class="flex gap-2">
			<button class="btn btn-sm btn-ghost"
				><Icon icon="heroicons:arrow-small-left" on:click={() => {}} /> Back</button
			>
			<h1 class="text-2xl">{task?.title}</h1>
		</div>
		<div class="flex items-center gap-2">
			<DeleteTaskButton taskId={task.id} />
		</div>
	</div>
	<div class="card card-compact card-bordered shadow-sm">
		<div class="card-body">
			<h1 class="card-title">Editing Task {task?.id}</h1>
			<form class="space-y-4" method="POST" action="?/updateTaskAction" use:enhance>
				<input
					type="text"
					placeholder="Task Title"
					class="input input-bordered input-sm w-full"
					required
					name="title"
					value={task?.title}
				/>

				<label class="form-control w-full max-w-xs">
					<div class="label">
						<span class="label-text">Deadline</span>
					</div>
					<input
						type="date"
						placeholder="Deadline"
						class="input input-bordered input-sm w-full"
						required
						name="deadline"
						value={new Date(task.deadline).toISOString().slice(0, 10)}
					/>
				</label>

				{#if task?.priority}
					<label class="form-control w-full max-w-xs">
						<div class="label">
							<span class="label-text">Priority</span>
						</div>
						<select
							class="select select-bordered select-sm w-full"
							name="priority"
							bind:value={task.priority}
						>
							<option value="LOW">Low</option>
							<option value="MEDIUM">Medium</option>
							<option value="HIGH">High</option>
						</select>
					</label>
				{/if}

				{#if task?.status}
					<label class="form-control w-full max-w-xs">
						<div class="label">
							<span class="label-text">Status</span>
						</div>
						<select
							class="select select-bordered select-sm w-full"
							name="status"
							bind:value={task.status}
						>
							<option value="ARCHIVED">Archived</option>
							<option value="BLOCKED">Blocked</option>
							<option value="COMPLETED">Completed</option>
							<option value="CANCELLED">Cancelled</option>
						</select>
					</label>
				{/if}

				<textarea
					class="textarea textarea-sm w-full"
					placeholder="Task Description"
					name="description"
					value={task?.description}
				></textarea>

				<div class="card-actions justify-end items-center">
					<div class="flex gap-2">
						<button class="btn btn-sm btn-ghost">Cancel</button>
						<button class="btn btn-sm btn-primary"
							>Update Task <Icon icon="heroicons:plus" /></button
						>
					</div>
				</div>
			</form>
		</div>
	</div>
</section>
