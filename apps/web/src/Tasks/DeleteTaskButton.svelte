<script lang="ts">
	export let taskId: string;
	import { deleteTask } from '$lib/data/tasks';
	import Icon from '@iconify/svelte';
	import { goto } from '$app/navigation';
	import toast, { Toaster } from 'svelte-french-toast';

	let updating = false;

	const onDeleteTask = async () => {
		try {
			await deleteTask(taskId);
			toast.success('Task has been deleted', {
				position: 'bottom-center'
			});
			await goto('/');
		} catch (error) {
			toast.error(error.message, {
				position: 'bottom-center'
			});
		}
	};
</script>

<button class="btn btn-sm btn-ghost text-start text-error" on:click={onDeleteTask}
	><Icon icon="heroicons:trash" /> Delete Task</button
>
<Toaster />
