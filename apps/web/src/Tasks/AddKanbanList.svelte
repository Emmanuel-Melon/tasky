<script lang="ts">
	import { enhance } from '$app/forms';
	import { Input } from '@repo/ui';
</script>

<form
	action="?/addKanbanListAction"
	class="bg-base-100 space-y-2 w-96 min-w-96"
	method="POST"
	use:enhance={() => {}}
>
	<Input type="text" placeholder="List Name" name="title" />
	<button class="btn btn-sm btn-outline w-full">Save List</button>
</form>
