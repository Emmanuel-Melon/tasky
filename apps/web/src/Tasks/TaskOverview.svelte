<script lang="ts">
    export let task: any;
</script>


<div class="card card-bordered card-compact">
    <div class="card-body">
        <h3 class="card-title"><a href={`/tasks/${task.id}`}>{task.title}</a></h3>
        <p>{task.description}</p>
    </div>
</div>