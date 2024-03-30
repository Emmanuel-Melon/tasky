<script lang="ts">
	import Icon from '@iconify/svelte';
	import { goto } from '$app/navigation';

	let query = "";

	const filterOptions = [
		{
			label: 'Status',
			key: 'status',
			value: 'asc' // or "desc" for descending order
		},
		{
			label: 'Priority',
			key: 'priority',
			value: 'desc' // Example value, adjust based on your needs
		},
		{
			label: 'Label',
			key: 'label',
			value: 'asc' // Example value, adjust based on your needs
		}
	];

	let selectedFilter = '';
	const handleFilterChange = () => {
		goto(`?status=${selectedFilter}`);
	};

	// sort logic
	let selectedSortOption: any;

	const handleSortChange = () => {
		// Assuming you have a way to set selectedSortOption based on user selection
		const sortQuery = selectedSortOption
			? `&orderBy=${selectedSortOption.key}:${selectedSortOption.value}`
			: '';
		goto(`?filter=status:eq:${selectedFilter}${sortQuery}`);
	};

	const sortOptions = [
		{
			label: 'Created At',
			key: 'status',
			value: 'asc' // or "desc" for descending order
		},
		{
			label: 'Deadline',
			key: 'status',
			value: 'asc' // or "desc" for descending order
		},
		{
			label: 'By Name',
			key: 'priority',
			value: 'desc' // Example value, adjust based on your needs
		}
	];
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
			<button class="btn btn-sm btn-ghost btn-square join-item"
				><Icon icon="heroicons:queue-list" /></button
			>
			<button class="btn btn-sm btn-ghost btn-square join-item"
				><Icon icon="heroicons:rectangle-group" /></button
			>
		</div>
		<form>
			<label class="form-control w-full max-w-xs">
				<select
					bind:value={selectedFilter}
					on:change={handleFilterChange}
					class="select select-sm select-bordered w-full max-w-xs"
				>
					<option disabled selected>Sort By</option>
					{#each sortOptions as option}
						<option>{option.label}</option>
					{/each}
				</select>
			</label>
		</form>
		<form>
			<label class="form-control w-full max-w-xs flex">
				<select
					bind:value={selectedFilter}
					on:change={handleFilterChange}
					class="select select-sm select-bordered"
				>
					<option disabled selected>Filter</option>
					{#each filterOptions as option}
						<option>{option.label}</option>
					{/each}
				</select>
			</label>
		</form>
		<button class="btn btn-sm btn-outline">Filter <Icon icon="heroicons:funnel" /></button>
		<button class="btn btn-sm btn-outline">Sort <Icon icon="heroicons:arrows-up-down" /></button>
	</div>
</div>
