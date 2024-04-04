<script lang="ts">
	export let tasks;
    import TaskOverview from './TaskOverview.svelte';
    import autoAnimate from '@formkit/auto-animate';
	export let view = 'grid';
	export let onLayoutChange = (layout: string) => {
		view = layout;
	};

	$: view;
</script>

<div use:autoAnimate class="space-y-2">
    {#each tasks as task}
        <TaskOverview {task} />
    {/each}
</div>
