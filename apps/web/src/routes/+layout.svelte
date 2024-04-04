<script lang="ts">
	import '../app.css';
	import Icon from '@iconify/svelte';
	import { Navbar } from '@repo/ui';

	const userId = 3;
</script>

<svelte:head>
	<title>Tasky</title>
	<meta name="description" content="Tasky" />
</svelte:head>

<body>
	<header>
		<div class="navbar bg-base-100 border-b shadow-sm">
			<div class="flex-1">
				<a class="link link-hover text-2xl" href="/">Tasky</a>
			</div>
			<div class="flex gap-4">
				<a href="/tasks/new" class="btn btn-sm btn-primary">Add Task <Icon icon="heroicons:plus" /></a>
				<div class="dropdown dropdown-end">
					<div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
						<div class="w-10 rounded-full">
							<img
								alt="Tailwind CSS Navbar component"
								src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
							/>
						</div>
					</div>
					<ul
						tabindex="-1"
						class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li>
							<a href={`/users/${userId}`}><Icon icon="heroicons:user" /> Profile </a>
						</li>
						<li>
							<a href="/settings"><Icon icon="heroicons:adjustments-horizontal" /> Settings</a>
						</li>
						<li><a href="/logout"><Icon icon="heroicons:arrow-left-on-rectangle" />Logout</a></li>
					</ul>
				</div>
			</div>
		</div>
	</header>
	<main class="min-h-screen-footer p-8">
		<slot />
	</main>
</body>
