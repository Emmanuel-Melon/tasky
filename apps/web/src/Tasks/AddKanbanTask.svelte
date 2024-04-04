<script lang="ts">
	import { enhance } from '$app/forms';
	import { Input } from '@repo/ui';
	import toast, { Toaster } from 'svelte-french-toast';
	export let listId: string;
</script>

<form
	class="space-y-4 bg-base-100 space-y-2"
	method="POST"
	action="?/saveTaskAction"
	use:enhance={async () => {
		toast.success(`Updated Task. View Now.`, {
			position: 'bottom-center'
		});
	}}
>
	<input type="hidden" name="kanbanListId" value={listId} />
	<Input type="text" placeholder="Title" name="title" />
	<button class="btn btn-sm btn-outline w-full">Save Task</button>
</form>
