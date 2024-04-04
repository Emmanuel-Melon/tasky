<script lang="ts">
	import Icon from '@iconify/svelte';
	import { Tooltip } from '@repo/ui';
	import { goto } from '$app/navigation';
	import SearchTasks from './SearchTasks.svelte';
	export let tasks: any;
	import { selectedView } from './store';

	export let onLayoutChange = (id: number) => {
		selectedView.set(id);
	};

	let selectedFilter = '';
	let selectedSortOption = '';
	let filterQuery: string;

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

	const items = [
		{ id: 1, name: 'List', icon: 'heroicons:bars-2', highlight: 'View as List' },
		{ id: 2, name: 'Grid', icon: 'heroicons:squares-2x2', highlight: 'View as Grid' },
		{ id: 3, name: 'Board', icon: 'heroicons:rectangle-group', highlight: 'Kanban Board' }
	];
</script>

<div class="space-y-2">
	<div class="card card-compact card-bordered bg-gray-50 shadow-sm">
		<div class="card-body">
			<SearchTasks {tasks} />
			<div class="flex items-center justify-between">
				<div class="join join-vertical lg:join-horizontal">
					{#each items as { id, name, icon, highlight }}
						<Tooltip data={highlight}>
							<button
								class={`btn btn-sm join-item hover:bg-accent`}
								on:click={() => onLayoutChange(id)}><Icon {icon} />{name}</button
							>
						</Tooltip>
					{/each}
				</div>
				<div class="flex gap-2">
					<div class="flex gap-2">
						<button class={`btn btn-sm join-item btn-accent`}>All</button>
						<button class={`btn btn-sm join-item btn-outline`}>Cancelled</button>
						<button class={`btn btn-sm join-item btn-outline`}>Completed</button>
					</div>
					<form>
						<label class="form-control w-full max-w-xs">
							<select
								bind:value={selectedSortOption}
								on:change={handleSortChange}
								class="select select-sm select-bordered w-full max-w-xs"
							>
								<option disabled>Sort By</option>
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
			<h3 class="text-xl">Tasks <span class="text-gray-500 text-sm">(15)</span></h3>
		</div>

		<div class="join join-vertical lg:join-horizontal">
			<button class={`btn btn-sm join-item btn-outline`}
				><Icon icon="heroicons:queue-list" />Prev</button
			>
			<button class={`btn btn-sm join-item btn-accent`}
				>Next <Icon icon="heroicons:rectangle-group" /></button
			>
		</div>
	</div>
</div>
