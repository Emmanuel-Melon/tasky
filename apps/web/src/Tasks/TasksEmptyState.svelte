<script lang="ts">
import AddTaskButton from '../Tasks/AddTaskButton.svelte';
import notes from "$lib/assets/notes.svg";


</script>
<div class="flex justify-center items-center text-center">
    <div class="space-y-2">
        <figure class="w-96">
            <img
            src={notes}
            alt="No Tasks"
        />
        </figure>
        <h3 class="text-xl">What do you need to get done today?</h3>
        <p>Start Creating Tasks by clicking on the "Add Task" button.</p>
    </div>
</div>
