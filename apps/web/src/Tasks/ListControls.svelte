<script lang="ts">
	import Icon from '@iconify/svelte';
	import { goto } from '$app/navigation';
	import SearchTasks from './SearchTasks.svelte';
	export let tasks;
	export let onLayoutChange;
	export let view;

	let query = '';

	const filterOptions = [
		{
			label: 'completed',
			key: 'completed'
		},
		{
			label: 'archived',
			key: 'archived'
		}
	];

	let selectedFilter = '';
	let selectedSortOption = '';
	let filterQuery;

	$: filterQuery = `status=${selectedFilter}`;

	const handleFilterChange = () => {
		const newUrl = new URL(window.location.href);
		console.log('new url', newUrl);
		goto(`?${filterQuery}`);
	};

	const handleSortChange = () => {
		const sortQuery = selectedSortOption
			? `&sort=${selectedSortOption.key}:${selectedSortOption.value}`
			: '';
		goto(`?${selectedFilter}${sortQuery}`);
	};

	const sortOptions = [
		{
			label: 'Created At',
			key: 'createdAt',
			value: 'asc' // or "desc" for descending order
		},
		{
			label: 'Deadline',
			key: 'deadline',
			value: 'asc' // or "desc" for descending order
		},
		{
			label: 'By Name',
			key: 'name',
			value: 'desc' // Example value, adjust based on your needs
		}
	];

	$: selectedFilter;
</script>

<div class="space-y-2">
	<div class="card card-compact card-bordered bg-gray-50 shadow-sm">
		<div class="card-body">
			<div class="flex items-center justify-between">
				<SearchTasks {tasks} />
				<div class="flex gap-2">
					<div class="join join-vertical lg:join-horizontal">
						<button
							class={`btn btn-sm join-item hover:bg-accent ${view === 'list' ? 'btn-secondary' : 'btn-outline'}`}
							on:click={() => onLayoutChange('list')}><Icon icon="heroicons:queue-list" />List</button
						>
						<button
							class={`btn btn-sm join-item hover:bg-accent ${view === 'grid' ? 'btn-secondary' : 'btn-outline'}`}
							on:click={() => onLayoutChange('grid')}
							><Icon icon="heroicons:rectangle-group" />Grid</button
						>
					</div>
					<form>
						<label class="form-control w-full max-w-xs">
							<select
								bind:value={selectedFilter}
								on:change={handleFilterChange}
								class="select select-sm select-bordered w-full max-w-xs"
							>
								<option disabled selected>Filter</option>
								{#each filterOptions as option}
									<option value={`${option.key}`}>Filter by {option.label}</option>
								{/each}
							</select>
						</label>
					</form>
					<form>
						<label class="form-control w-full max-w-xs">
							<select
								bind:value={selectedSortOption}
								on:change={handleSortChange}
								class="select select-sm select-bordered w-full max-w-xs"
							>
								<option disabled selected>Sort By</option>
								{#each sortOptions as option}
									<option value={`${option.key}:${option.value}`}
										>Sort by {option.label} {option.value.toUpperCase()}</option
									>
								{/each}
							</select>
						</label>
					</form>
				</div>
			</div>
		</div>
	</div>
<div class="flex justify-between items-center">
	<div>
		<h3 class="text-xl">Tasks</h3>
	</div>
	<div class="join join-vertical lg:join-horizontal">
		<button
			class={`btn btn-sm join-item hover:bg-accent ${view === 'list' ? 'btn-secondary' : 'btn-outline'}`}
			on:click={() => onLayoutChange('list')}><Icon icon="heroicons:queue-list" />Prev</button
		>
		<button
			class={`btn btn-sm join-item hover:bg-accent ${view === 'grid' ? 'btn-secondary' : 'btn-outline'}`}
			on:click={() => onLayoutChange('grid')}
			>Next <Icon icon="heroicons:rectangle-group" /></button
		>
	</div>
</div>	
</div>