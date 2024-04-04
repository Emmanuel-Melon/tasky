<script lang="ts">
	import KanbanList from './KanbanList.svelte';
	import AddKanbanList from './AddKanbanList.svelte';
	export let board;
	import { flip } from 'svelte/animate';
	import { dndzone } from 'svelte-dnd-action';

	const lists = board?.lists;
	let items = board?.lists;

	const flipDurationMs = 300;
	function handleDndConsider(e) {
		items = e.detail.items;
	}
	function handleDndFinalize(e) {
		console.log('dropped!', e.detail);
		items = e.detail.items;
	}
</script>

<section class="space-y-2">
	<div
		class="flex gap-2 overflow-x-auto"
	>
		{#each items as item (item.id)}
			<div animate:flip={{ duration: flipDurationMs }}>
				<KanbanList list={item} />
			</div>
		{/each}
		<AddKanbanList />
	</div>
</section>
