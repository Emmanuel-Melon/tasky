<script lang="ts">
	import { Input } from '@repo/ui';
</script>

<section class="space-y-2">
	<div class="card card-bordered card-compact">
		<div class="card-body">
			<h3 class="card-title">Account Settings</h3>
			<form class="space-y-2">
				<Input type="text" placeholder="Email" name="email" />
				<div class="card-actions justify-end">
                    <button class="btn btn-sm btn-primary">Save</button>
                </div>
			</form>
		</div>
	</div>
    <div class="card card-bordered card-compact">
		<div class="card-body">
			<h3 class="card-title">Account Settings</h3>
			<form class="space-y-2">
				<Input type="password" placeholder="Current Password" name="currentPassword" />
				<Input type="password" placeholder="Confirm Password" name="currentPasswordConfirmation" />
				<Input type="password" placeholder="New Password" name="newPassword" />
				<div class="card-actions justify-end">
                    <button class="btn btn-sm btn-primary">Save</button>
                </div>
			</form>
		</div>
	</div>
</section>
