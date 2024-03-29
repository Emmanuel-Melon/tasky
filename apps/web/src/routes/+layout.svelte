<script lang="ts">
	import '../app.css';
	import Icon from '@iconify/svelte';
	import { Navbar } from '@repo/ui';
	import AddTaskButton from '../Tasks/AddTaskButton.svelte';
</script>

<svelte:head>
	<title>Tasky</title>
	<meta name="description" content="Tasky" />
</svelte:head>

<body>
	<header>
		<div class="navbar bg-base-100 border-b shadow-sm">
			<div class="flex-1">
				<a class="link text-xl" href="/">Tasky</a>
			</div>
			<div class="flex gap-4">
				<AddTaskButton />
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
						tabindex="0"
						class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li>
							<a class="justify-between" href="/profile"> Profile </a>
						</li>
						<li><a href="/settings">Settings</a></li>
						<li><a href="/logout">Logout</a></li>
					</ul>
				</div>
			</div>
		</div>
	</header>
	<main class="min-h-screen-footer p-8">
		<slot />
	</main>
</body>
