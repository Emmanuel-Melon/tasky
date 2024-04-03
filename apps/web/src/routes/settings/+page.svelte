<script lang="ts">
	import 'iconify-icon';
	import { onDestroy } from 'svelte';
	import { selectedItem } from './store';

	import AccountSettings from '../../Users/AccountSettings.svelte';
	import ProfileSettings from '../../Users/ProfileSettings.svelte';

	let currentItem: number;

	const unsubscribe = selectedItem.subscribe((value) => {
		currentItem = value - 1;
	});

	const items = [
		{ value: 1, component: ProfileSettings },
		{ value: 2, component: AccountSettings }
	];

	onDestroy(unsubscribe);
</script>

<section>
	<svelte:component this={items[currentItem].component} {...items[currentItem].props} />
</section>
