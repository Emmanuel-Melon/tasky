<script lang="ts">
	export let taskId: string;
	import { deleteTask } from '$lib/data/tasks';
	import Icon from '@iconify/svelte';

	const onDeleteTask = async () => {
		const res = await deleteTask(taskId);
	};
</script>

<button class="btn btn-sm btn-ghost text-start w-full text-error" on:click={onDeleteTask}
	><Icon icon="heroicons:trash" /> Delete Task</button
>
