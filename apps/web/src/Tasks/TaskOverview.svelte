<script lang="ts">
    export let task: any;
</script>


<div class="card card-bordered card-compact">
    <div class="card-body">
        <h3 class="card-title">{task.title}</h3>
        <p>{task.description}</p>
    </div>
</div>