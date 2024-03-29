<script lang="ts">
	export let task: any;
	import Icon from '@iconify/svelte';
	import { Avatar } from '@repo/ui';
</script>

<div class="card card-bordered card-compact shadow-sm">
	<div class="card-body">
		<div class="flex items-center justify-between">
			<h3 class="card-title"><a href={`/tasks/${task.id}`}>{task.title}</a></h3>
			<div class="flex gap-2">
				<button class="btn btn-sm btn-squared"
					><Icon icon="heroicons:ellipsis-horizontal" />
				</button>
			</div>
		</div>
		<p>{task.description}</p>
		<div class="card-actions justify-between items-center">
			<div class="flex gap-2 items-center">
				{#if task.users.length <= 0}
					<div class="badge">Unassigned</div>
				{:else}
					<div class="flex gap-2">
						{#each task.users as user}
							<Avatar src={user.avatar} alt={user.name} />
						{/each}
					</div>
				{/if}

				<div class="badge badge-md gap-2"><Icon icon="heroicons:clock" /> {task.deadline}</div>
			</div>
			<div class="flex gap-2">
				<div class="badge gap-2"><Icon icon="heroicons:chat-bubble-left" />3</div>
			</div>
		</div>
	</div>
</div>
