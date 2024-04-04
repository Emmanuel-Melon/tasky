<script lang="ts">
	/** @type {import('./$types').PageData} */
	import { enhance } from '$app/forms';
	import Icon from '@iconify/svelte';
	import { goto } from '$app/navigation';
	import toast, { Toaster } from 'svelte-french-toast';
	import { onMount } from 'svelte';
	import { getUsers } from '$lib/data/users';

	let users: any;

	onMount(async () => {
		users = await getUsers();
		console.log('users', users);
	});

	$: users;

	const onCancel = async () => {
		await goto("/");
	}
</script>

<form
	class="space-y-4"
	method="POST"
	action="?/saveTaskAction"
	use:enhance={async () => {
		toast.success(`Updated Task. View Now.`, {
			position: 'bottom-center'
		});
	}}
>
	<input type="text" placeholder="Task Title" class="input input-sm w-full" required name="title" />
	{#if users}
		<label class="form-control w-full max-w-xs">
			<div class="label">
				<span class="label-text flex gap-2 items-center text-gray-500"><Icon icon="heroicons:user" /> Author</span>
			</div>
			<select class="select select-sm select-bordered" name="ownerId">
				{#each users as user}
					<option value={user.id}>{user.name}</option>
				{/each}
			</select>
		</label>
	{/if}
	<label class="form-control w-full max-w-xs">
		<div class="label">
			<span class="label-text flex gap-2 items-center text-gray-500"><Icon icon="heroicons:calendar-days" /> Deadline</span>
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
			<button class="btn btn-sm btn-ghost" on:click={onCancel}>Cancel</button>
			<button class="btn btn-sm btn-primary" type="submit">Save Task <Icon icon="heroicons:plus" /></button>
		</div>
	</div>
</form>
<Toaster />
