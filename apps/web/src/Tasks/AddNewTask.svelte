<script lang="ts">
	/** @type {import('./$types').PageData} */
	import { enhance } from '$app/forms';
	import Icon from '@iconify/svelte';

	/** @type {import('./$types').ActionData} */
	let form;

	export let title = '';
	export let description = '';
</script>

<form class="space-y-4" method="POST" action="?/saveTaskAction" use:enhance>
	<input
		type="text"
		placeholder="Task Title"
		class="input input-sm w-full"
		value={title}
		required
	/>
	{#if form?.error}
		<p>Something went wrong</p>
	{/if}
	<textarea
		class="textarea textarea-xs w-full"
		placeholder="Task Description"
		bind:value={description}
	></textarea>
	<div class="flex gap-2">
		<button class="btn btn-sm btn-outline"><Icon icon="heroicons:calendar-days" /> Due Date</button>
		<button class="btn btn-sm btn-outline"><Icon icon="heroicons:hand-raised" /> Priority</button>
	</div>
	<div class="card-actions justify-end items-center border-t py-2">
		<div class="flex gap-2">
			<button class="btn btn-sm btn-ghost">Cancel</button>
			<button class="btn btn-sm btn-primary">Save Task <Icon icon="heroicons:plus-circle" /></button
			>
		</div>
	</div>
</form>
