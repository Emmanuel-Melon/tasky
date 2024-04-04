<script lang="ts">
	import { enhance } from "$app/forms";
	import { goto } from '$app/navigation';
	import toast, { Toaster } from 'svelte-french-toast';
	import { onMount } from 'svelte';

	let email = '';
	let password = '';
	let isLoading = false;


</script>

<div class="card card-compact card-bordered shadow-sm w-96">
    <div class="card-body">
        <h2 class="card-title">Sign in</h2>
        <form method="post" use:enhance action="?/loginUserAction" class="space-y-2">
            <label for="email">Username</label>
            <input name="email" id="email" class="input input-bordered input-sm w-full" bind:value={email} required /><br />
            <label for="password">Password</label>
            <input type="password" class="input input-bordered input-sm w-full" name="password" id="password" bind:value={password} required /><br />
            <button class="btn btn-sm btn-primary" type="submit">{isLoading ? 'Loading...' : 'Continue'}</button>
        </form>
    </div>
</div>
<Toaster />
