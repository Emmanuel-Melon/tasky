<script lang="ts">
	import { page } from '$app/stores';
	import ListTasks from '../Tasks/ListTasks.svelte';
	const { data: { lists, tasks } } = $page;
</script>

<section class="space-y-4 w-4/5 m-auto">
	<ListTasks tasks={tasks} {lists} />
</section>
