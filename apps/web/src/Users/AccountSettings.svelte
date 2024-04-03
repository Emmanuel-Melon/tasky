<script lang="ts">
	import { enhance } from '$app/forms';
	import Icon from '@iconify/svelte';
	import { Input } from '@repo/ui';
</script>

<section class="space-y-2">
	<div class="card card-bordered card-compact">
		<div class="card-body">
			<h3 class="card-title"><Icon icon="heroicons:information-circle" /> Account Info</h3>
			<form class="space-y-2" method="POST" action="?/accountInfoAction" use:enhance={() => {}}>
				<Input type="text" placeholder="Email" name="email" />
				<div class="card-actions justify-end">
                    <button class="btn btn-sm btn-primary">Save</button>
                </div>
			</form>
		</div>
	</div>
    <div class="card card-bordered card-compact">
		<div class="card-body">
			<h3 class="card-title"><Icon icon="heroicons:lock-open" /> Security</h3>
			<form class="space-y-2" method="POST" action="?/accountSecurityAction" use:enhance={() => {}}>
				<Input type="password" placeholder="Current Password" name="currentPassword" />
				<Input type="password" placeholder="Confirm Password" name="currentPasswordConfirmation" />
				<Input type="password" placeholder="New Password" name="newPassword" />
				<div class="card-actions justify-end">
                    <button class="btn btn-sm btn-primary">Save</button>
                </div>
			</form>
		</div>
	</div>
	<div class="card card-bordered card-compact">
		<div class="card-body">
			<h3 class="card-title text-error"><Icon icon="heroicons:shield-exclamation" /> Danger Zone</h3>
			<form class="space-y-2" method="POST" action="?/deleteAccountAction" use:enhance={() => {}}>
				<button class="btn btn-sm btn-error">Delete Account</button>
			</form>
		</div>
	</div>
</section>
