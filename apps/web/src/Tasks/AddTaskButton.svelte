<script lang="ts">
    import Icon from '@iconify/svelte';
    import AddNewTask from "./AddNewTask.svelte";
</script>

<button class="btn btn-sm btn-primary" onclick="my_modal_1.showModal()">Add Task <Icon icon="heroicons:plus" /></button>
<dialog id="my_modal_1" class="modal">
	<div class="modal-box">
		<AddNewTask />
	</div>
</dialog>
