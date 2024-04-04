<script lang="ts">
	import Icon from '@iconify/svelte';
	import { goto } from '$app/navigation';
	import SearchTasks from './SearchTasks.svelte';
	export let tasks: any;
	export let onLayoutChange: (view: string) => void;
	export let view: string;

	let selectedFilter: string;
	let query: string;

	const handleFilterChange = async (filter: string) => {
		if (filter === 'all') {
			selectedFilter = filter;
			await goto(`/`, { replaceState: true });
			window.location.reload();
			return;
		}
		selectedFilter = filter;
		query = `status=${selectedFilter}`;
		await goto(`?${query}`, { replaceState: true });
		window.location.reload();
	};

	$: selectedFilter;
	$: query;

	let selectedSortOption: string = '';

	const handleSortChange = async () => {
		await goto(`?${query}`, { replaceState: true });
		window.location.reload();
	};

	const sortOptions = [
		{
			label: 'Latest',
			key: 'createdAt',
			value: 'asc' // or "desc" for descending order
		},
		{
			label: 'Deadline',
			key: 'deadline',
			value: 'asc' // or "desc" for descending order
		},
		{
			label: 'Alphabetically',
			key: 'name',
			value: 'desc' // Example value, adjust based on your needs
		}
	];

	// pagination logic:
	let currentPage: number = 1;
	let itemsPerPage: number = 6;

	const handlePrevPage = async () => {
		if (currentPage > 1) {
			currentPage--;
			await goto(`?${query}`, { replaceState: true });
			window.location.reload();
		}
	};

	const handleNextPage = async () => {
		currentPage++;
		await goto(`?${query}`, { replaceState: true });
		window.location.reload();
	};

	$: tasks;

	console.log('tasks', tasks);
</script>

<div class="space-y-2">
	<div class="card card-compact card-bordered bg-gray-50 shadow-sm">
		<div class="card-body">
			<SearchTasks {tasks} />
			<div class="flex items-center justify-between">
				<div class="flex gap-2">
					<h3 class="text-xl">Tasks</h3>
					<button
						class="btn btn-sm join-item {selectedFilter === '' ? 'btn-accent' : 'btn-outline'}"
						on:click={() => handleFilterChange('all')}>All</button
					>
					<button
						class="btn btn-sm join-item {selectedFilter === 'Archived'
							? 'btn-accent'
							: 'btn-outline'}"
						on:click={() => handleFilterChange('Archived')}>Archived</button
					>
					<button
						class="btn btn-sm join-item {selectedFilter === 'Cancelled'
							? 'btn-accent'
							: 'btn-outline'}"
						on:click={() => handleFilterChange('Cancelled')}>Cancelled</button
					>
					<button
						class="btn btn-sm join-item {selectedFilter === 'Completed'
							? 'btn-accent'
							: 'btn-outline'}"
						on:click={() => handleFilterChange('Completed')}>Completed</button
					>
				</div>
				<form>
					<label class="form-control w-full max-w-xs">
						<select
							on:change={handleSortChange}
							class="select select-sm select-bordered w-full max-w-xs"
						>
							<option disabled selected>Pick one</option>
							{#each sortOptions as option}
								<option value={`${option.value}`}
									>Sort by {option.label} {option.value.toUpperCase()}</option
								>
							{/each}
						</select>
					</label>
				</form>
			</div>
		</div>
	</div>
	<div class="flex justify-between items-center flex-col lg:flex-row">
		<div class="join join-vertical lg:join-horizontal">
			<button
				class={`btn btn-sm join-item hover:bg-accent ${view === 'list' ? 'btn-secondary' : 'btn-outline'}`}
				on:click={() => onLayoutChange('list')}><Icon icon="heroicons:queue-list" />List</button
			>
			<button
				class={`btn btn-sm join-item hover:bg-accent ${view === 'grid' ? 'btn-accent' : 'btn-outline'}`}
				on:click={() => onLayoutChange('grid')}
				><Icon icon="heroicons:rectangle-group" />Grid</button
			>
			<button
				class={`btn btn-sm join-item hover:bg-accent ${view === 'board' ? 'btn-outline' : 'btn-outline'}`}
				on:click={() => onLayoutChange('board')}
				><Icon icon="heroicons:rectangle-group" />Board</button
			>
		</div>

		<div class="flex gap-2">
			<label class="form-control max-w-xs">
				<select class="select select-sm select-bordered">
					<option disabled selected>Items 6</option>
					<option>Items 6</option>
					<option>Items 12</option>
					<option>Items 24</option>
				</select>
			</label>
			<div class="join join-vertical lg:join-horizontal">
				<button on:click={handlePrevPage} class={`btn btn-sm join-item btn-outline`}
					><Icon icon="heroicons:arrow-small-left" />Prev</button
				>
				<button on:click={handleNextPage} class={`btn btn-sm join-item btn-accent`}
					>Next <Icon icon="heroicons:arrow-small-right" /></button
				>
			</div>
		</div>
	</div>
</div>
