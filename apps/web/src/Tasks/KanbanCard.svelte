<script lang="ts">
	export let task;
</script>

<div class="card card-bordered card-compact bg-base-100 w-80">
	<div class="card-body">
		<div class="flex justify-between items-center">
            <a href={`/tasks/${task.id}`} class="card-title text-xs link-hover">{task.title}</a>
        </div>
        <p class="text-gray-500">{task.description}</p>
        <div class="flex gap-2">
            {#each task.labels as label}
            <div class={`badge text-white py-2`} style={`background-color: ${label.color}`}>{label.title}</div>
            {/each}
        </div>
	</div>
</div>
