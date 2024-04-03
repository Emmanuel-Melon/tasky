<script lang="ts">
	import { Input } from '@repo/ui';
</script>

<section>
	<div class="card card-bordered card-compact">
		<div class="card-body">
            <h3 class="card-title">Profile Settings</h3>
			<form class="space-y-2">
				<Input type="text" placeholder="First Name" name="name" />
                <Input type="text" placeholder="Last Name" name="name" />
				<div class="card-actions justify-end">
                    <button class="btn btn-sm btn-primary">Save</button>
                </div>
			</form>
		</div>
	</div>
</section>
