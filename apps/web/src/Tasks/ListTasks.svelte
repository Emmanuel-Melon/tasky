<script lang="ts">
	import TaskOverview from './TaskOverview.svelte';
	import ListControls from './ListControls.svelte';
	import autoAnimate from '@formkit/auto-animate';
	const tasks = [
		{
			id: 1,
			title: '[TASK-2]: List Tasks',
			description: 'Build a tasks list',
			deadline: '2024-4-11T10:37:01.188224+00:00',
			users: [
				{
					id: 1,
					name: 'Emmanuel Gatwech',
					avatar: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
				}
			]
		},
		{
			id: 2,
			title: '[TASK-3]: View Task Details',
			description: 'Build a tasks list',
			deadline: '2024-4-11T10:37:01.188224+00:00',
			users: [
				{
					id: 1,
					name: 'Emmanuel Gatwech',
					avatar: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
				},
				{
					id: 2,
					name: 'Emmanuel Gatwech',
					avatar: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
				}
			]
		},
		{
			id: 3,
			title: '[TASK-4]: Edit Task',
			description: 'Build a tasks list',
			deadline: '2024-4-11T10:37:01.188224+00:00',
			users: []
		}
	];
</script>

<div class="space-y-4">
	<ListControls />
	<div use:autoAnimate class="space-y-4">
		{#each tasks as task}
			<TaskOverview {task} />
		{/each}
	</div>
</div>
