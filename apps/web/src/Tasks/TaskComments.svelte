<script lang="ts">
	import { Avatar, Card } from '@repo/ui';
	import Icon from '@iconify/svelte';
	import { formatDateTime } from '@repo/lib/dates';
	import AddComment from './AddComment.svelte';

	export let task;

	let showAddComment = false;

	function toggleAddComment() {
		showAddComment = !showAddComment;
	}

	// Function to handle the Cancel action
	function handleCancel() {
		showAddComment = false;
	}
</script>

<div class="space-y-2">
	<div class="flex gap-2 items-center">
		<Icon icon="heroicons:arrow-small-right" />
		<h3 class="text-sm">Comments</h3>
		<div class="badge gap-2"><Icon icon="heroicons:chat-bubble-left" /> 3</div>
	</div>
	{#if task.Comments}
		{#each task.Comments as comment}
			<div class="space-y-2">
				<div class="flex items-center gap-4">
					<figure>
						<Avatar alt="Emmanuel Gatwech" />
					</figure>
					<div class="space-y-2">
						<div class="flex items-center gap-2">
							<h3>{comment.author.name}</h3>
							<p class="text-gray-500">{formatDateTime(comment.createdAt)}</p>
						</div>
						<p>{comment.content}</p>
					</div>
				</div>
			</div>
		{/each}
	{/if}

	<div class="flex items-center gap-4">
		<figure>
			<Avatar alt="Emmanuel Gatwech" />
		</figure>
		<div class="space-y-2 w-full">
			<input
				type="text"
				placeholder="Add Comment"
				class="input input-sm w-full"
				on:focus={toggleAddComment}
			/>
			{#if showAddComment}
				<AddComment {handleCancel} />
			{/if}
		</div>
	</div>
</div>
