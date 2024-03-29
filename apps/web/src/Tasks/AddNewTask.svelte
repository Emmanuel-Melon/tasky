<script lang="ts">
	import Icon from '@iconify/svelte';

	let title = '';
	let description = '';

	export const handleSubmit = (e) => {
		console.log('yeerr', e);
	};
</script>

<div class="card card-compact card-bordered">
    <div class="card-body">
        <form class="space-y-4" method="post" action="?/saveTask">
            <input
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full"
                bind:value={title}
                on:input={(event) => (title = event?.target?.value)}
            />
            <textarea
                class="textarea textarea-bordered w-full"
                placeholder="Task Description"
                bind:value={description}
                on:input={(event) => (title = event?.target?.value)}
            ></textarea>
            <button class="btn btn-sm btn-primary w-full"
                >Save Task <Icon icon="heroicons:plus-circle" on:buttonClick={handleSubmit} /></button
            >
        </form>
    </div>
    
</div>