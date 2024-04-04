<script lang="ts">
	import KanbanList from './KanbanList.svelte';

    export let lists;
</script>

<section class="space-y-2">
	<div class="bg-base-200"></div>
	<div class="flex gap-2 overflow-x-auto">
		{#each lists as list}
			<KanbanList {list} />
		{/each}
	</div>
</section>
