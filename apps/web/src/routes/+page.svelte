<script lang="ts">
	import { page } from '$app/stores';
	import ListTasks from '../Tasks/ListTasks.svelte';
	import AddNewTask from "../Tasks/AddNewTask.svelte";

	const { data: { tasks } } = $page;
</script>

<section class="space-y-4 w-3/5 m-auto">
	<ListTasks tasks={tasks} />
</section>
