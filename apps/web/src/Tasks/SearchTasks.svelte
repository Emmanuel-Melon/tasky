<script lang="ts">
	/** @type {import('./$types').PageData} */
	import { enhance } from '$app/forms';
	import Icon from '@iconify/svelte';
    export let tasks;

    const searchTasks = tasks?.map(task => ({
        ...task,
        serachQuery: `${task.title} ${task.description}`
    }));
</script>

<div class="bg-gray-50">
	<form method="POST" action="?/searchTasksAction" use:enhance>
		<div class="join">
			<div>
				<div>
					<input
						class="input input-sm input-bordered join-item"
						name="searchQuery"
						placeholder="By title or description"
					/>
				</div>
			</div>
			<button class="btn btn-sm join-item"><Icon icon="heroicons:calendar-days" /> Search</button>
		</div>
	</form>
</div>
