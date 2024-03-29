<script lang="ts">
	import Icon from '@iconify/svelte';

	let title = '';
	let description = '';

	export const handleSubmit = (e) => {
		console.log('yeerr', e);
	};
</script>

<div class="card card-compact card-bordered">
	<div class="card-body">
		<form class="space-y-4" method="post" action="?/saveTask">
			<input
				type="text"
				placeholder="Task Title"
				class="input input-sm w-full"
				bind:value={title}
				on:input={(event) => (title = event?.target?.value)}
			/>
			<textarea
				class="textarea textarea-sm w-full"
				placeholder="Task Description"
				bind:value={description}
				on:input={(event) => (title = event?.target?.value)}
			></textarea>
            <div class="flex gap-2">
                <button class="btn btn-sm btn-outline"><Icon icon="heroicons:calendar-days" /> Due Date</button>
                <button class="btn btn-sm btn-outline"><Icon icon="heroicons:hand-raised" /> Priority</button>
            </div>
			<div class="card-actions justify-end items-center">
				<div class="flex gap-2">
					<button class="btn btn-sm btn-ghost">Cancel</button>
					<button on:click={handleSubmit} class="btn btn-sm btn-primary"
						>Save Task <Icon icon="heroicons:plus-circle" /></button
					>
				</div>
			</div>
		</form>
	</div>
</div>
