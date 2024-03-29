<script lang="ts">
	import { page } from '$app/stores';
	import ListTasks from '../Tasks/ListTasks.svelte';
	const { data: { tasks } } = $page;
</script>

<section class="space-y-4">
	<ListTasks tasks={tasks} />
</section>
