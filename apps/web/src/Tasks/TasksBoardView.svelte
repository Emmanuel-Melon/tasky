<script lang="ts">
	import KanbanList from './KanbanList.svelte';
    import AddKanbanList from './AddKanbanList.svelte';
	export let board;

    const lists = board?.lists;
    console.log("lists", lists);
</script>

<section class="space-y-2">
    <div class="flex gap-2 overflow-x-auto">
        {#each lists as list}
            <KanbanList {list} />
        {/each}
        <AddKanbanList />
    </div>
</section>
