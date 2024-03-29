<script lang="ts">
	import AddNewTask from './AddNewTask.svelte';
	import { Modal } from '@repo/ui';
</script>

<Modal CTA="Add Task" heading="Create new task" icon="heroicons:plus" id="add-task">
	<AddNewTask />
</Modal>
