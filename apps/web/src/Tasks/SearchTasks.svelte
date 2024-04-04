<script lang="ts">
	/** @type {import('./$types').PageData} */
	import { enhance } from '$app/forms';
	import Icon from '@iconify/svelte';
    export let tasks;

    const searchTasks = tasks?.map(task => ({
        ...task,
        serachQuery: `${task.title} ${task.description}`
    }));

	// <div>
	// 	{#each searchTasks as task}
	// 		<div class="bg-base-1">
	// 			<a href={`/tasks/${task.id}`} class="link link-hover">{task.title}</a>
	// 		</div>
	// 	{/each}
	// </div>


</script>


<div class="bg-gray-50">
	<form method="POST" action="?/searchTasksAction" use:enhance>
		<div class="join w-full">
			<input
			class="input input-bordered join-item w-full"
			name="searchQuery"
			placeholder="By title or description"
		/>
		</div>
	</form>

</div>
