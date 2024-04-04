<script lang="ts">
	import { enhance } from '$app/forms';
	import Icon from '@iconify/svelte';
	import { Input } from '@repo/ui';
	import toast, { Toaster } from 'svelte-french-toast';


	export let user;
</script>

<section>
	<div class="card card-bordered card-compact">
		<div class="card-body">
			<h3 class="card-title"><Icon icon="heroicons:user" /> Profile</h3>
			<form
				class="space-y-2"
				method="POST"
				action="?/profileInfoAction"
				use:enhance={async () => {
					toast.success('Updated Task', {
						position: 'bottom-center'
					});
				}}
			>
				<Input type="text" placeholder="First Name" name="firstName" />
				<Input type="text" placeholder="Last Name" name="lastName" />

				<textarea  class="textarea textarea-bordered textarea-sm w-full" placeholder="Bio" name="description">

				</textarea>
				<div class="card-actions justify-end">
					<button class="btn btn-sm btn-primary">Save</button>
				</div>
			</form>
		</div>
	</div>
</section>
<Toaster />
