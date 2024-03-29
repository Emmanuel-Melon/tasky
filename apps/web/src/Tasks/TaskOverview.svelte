<script lang="ts">
	export let task: any;
	import Icon from '@iconify/svelte';
	import { Avatar } from '@repo/ui';
	import { deleteTask } from '$lib/data/tasks';

	const handleDelete = async () => {
		const res = await deleteTask(task.id);
	};
</script>

<div class="card card-bordered card-compact shadow-sm bg-base-100">
	<div class="card-body">
		<div class="flex items-center justify-between">
			<div>
				<h3 class="card-title"><a href={`/tasks/${task.id}`}>{task.title}</a></h3>
			</div>
			<div class="flex gap-2">
				<div class="dropdown dropdown-end">
					<div tabIndex={0} role="button" class="btn m-1 btn-ghost btn btn-sm btn-squared">
						<Icon icon="heroicons:ellipsis-horizontal" />
					</div>
					<ul
						tabIndex={0}
						class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li><a href="/"><Icon icon="heroicons:pencil" /> Edit Task</a></li>
						<li>
							<a href="/" on:click={handleDelete}><Icon icon="heroicons:trash" /> Delete Task</a>
						</li>
					</ul>
				</div>
			</div>
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
