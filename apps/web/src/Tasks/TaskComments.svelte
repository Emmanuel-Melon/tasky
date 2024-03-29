<script lang="ts">
	import { Avatar, Card } from '@repo/ui';
	import Icon from '@iconify/svelte';
	export let task;
</script>

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
						<p class="text-gray-500">{comment.createdAt}</p>
					</div>
					<p>{comment.content}</p>
				</div>
			</div>
		</div>
	{/each}
{/if}
