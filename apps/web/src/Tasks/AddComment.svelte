<script lang="ts">
    import { Card } from "@repo/ui";
	let description = '';
    export let handleCancel: () => void;
</script>


<div class="card card-compact w-full">
    <div class="card-body">
        <form class="space-y-2 w-full">
            <textarea
                class="textarea textarea-sm w-full"
                placeholder="Type here..."
                bind:value={description}
            ></textarea>
            <div class="card-actions justify-end">
                <button class="btn btn-sm" on:click={handleCancel}>Cancel</button>
                <button class="btn btn-sm btn-primary">Comment</button>
            </div>
        </form>
        
    </div>
</div>