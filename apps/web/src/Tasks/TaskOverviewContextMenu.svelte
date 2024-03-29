<script lang="ts">
	export let task: any;
	import Icon from '@iconify/svelte';
	import { Avatar } from '@repo/ui';
	import { deleteTask } from '$lib/data/tasks';
	import { formatDateTime } from '@repo/lib/dates';

	const handleDelete = async () => {
		const res = await deleteTask(task.id);
	};
    // 
</script>

<div class="dropdown dropdown-end">
	<div tabIndex={0} role="button" class="btn m-1 btn-ghost btn btn-sm btn-squared">
		<Icon icon="heroicons:ellipsis-horizontal" />
	</div>
	<ul tabIndex={0} class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
        <li>
			<a href="/"><Icon icon="heroicons:document-duplicate" /> Duplicate</a>
		</li>
        <li>
			<a href="/"><Icon icon="heroicons:check-circle" /> Mark Completed</a>
		</li>
        <li><a href="/"><Icon icon="heroicons:pencil" /> Edit Task</a></li>
		<li>
			<a href="/" on:click={handleDelete} class="text-error"><Icon icon="heroicons:trash" /> Delete Task</a>
		</li>
	</ul>
</div>
