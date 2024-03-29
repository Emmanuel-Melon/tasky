<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<div class="flex items-center justify-between">
	<div class="">
		<div class="join">
			<div>
				<div>
					<input class="input input-sm input-bordered join-item" placeholder="Search" />
				</div>
			</div>
			<button class="btn btn-sm join-item">Search</button>
		</div>
	</div>
	<div class="flex gap-2">
		<div class="join join-vertical lg:join-horizontal">
			<button class="btn btn-sm btn-square join-item"><Icon icon="heroicons:queue-list" /></button>
			<button class="btn btn-sm btn-square join-item"
				><Icon icon="heroicons:rectangle-group" /></button
			>
		</div>
		<button class="btn btn-sm btn-outline">Filter <Icon icon="heroicons:funnel" /></button>
		<button class="btn btn-sm btn-outline">Sort <Icon icon="heroicons:arrows-up-down" /></button>
	</div>
</div>
