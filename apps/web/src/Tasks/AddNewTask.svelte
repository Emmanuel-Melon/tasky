<script lang="ts">
	/** @type {import('./$types').PageData} */
	import { enhance } from '$app/forms';
	import Icon from '@iconify/svelte';
	import { goto } from '$app/navigation';
	import toast, { Toaster } from 'svelte-french-toast';
</script>

<form
	class="space-y-4"
	method="POST"
	action="?/saveTaskAction"
	use:enhance={async () => {
		toast.success('Updated Task', {
			position: 'bottom-center'
		});
		await goto(`/`);
	}}
>
	<input type="text" placeholder="Task Title" class="input input-sm w-full" required name="title" />
	<label class="form-control w-full max-w-xs">
		<div class="label">
			<span class="label-text">Deadline</span>
		</div>
		<input
			type="date"
			placeholder="Deadline"
			class="input input-bordered input-sm w-full"
			required
			name="deadline"
		/>
	</label>
	<textarea class="textarea textarea-sm w-full" placeholder="Task Description" name="description"
	></textarea>
	<div class="card-actions justify-end items-center">
		<div class="flex gap-2">
			<button class="btn btn-sm btn-ghost">Cancel</button>
			<button class="btn btn-sm btn-primary">Save Task <Icon icon="heroicons:plus" /></button>
		</div>
	</div>
</form>
<Toaster />
