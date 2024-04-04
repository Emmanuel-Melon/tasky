<script lang="ts">
	import { page } from '$app/stores';
	import ListTasks from '../Tasks/ListTasks.svelte';
	const { data: { board, tasks } } = $page;
</script>

<section class="space-y-4 m-auto">
	<ListTasks tasks={tasks} {board} />
</section>
