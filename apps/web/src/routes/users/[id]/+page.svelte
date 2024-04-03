<script lang="ts">
	import { Avatar, Card } from '@repo/ui';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import Icon from '@iconify/svelte';
	import { formatDateTime } from '@repo/lib/dates';
	const {
		data: { user}
	} = $page;

</script>


<section class="space-y-2 w-4/5 m-auto">
    <div>
        <div class="stats shadow">
  
            <div class="stat">
              <div class="stat-figure text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
              </div>
              <div class="stat-title">Total Tasks</div>
              <div class="stat-value text-primary">25.6K</div>
            </div>
            
            <div class="stat">
              <div class="stat-figure text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <div class="stat-title">Completed Tasks</div>
              <div class="stat-value text-secondary">2.6M</div>
            </div>
            
            <div class="stat">
              <div class="stat-figure text-secondary">
                <div class="avatar online">
                  <div class="w-16 rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
              </div>
              <div class="stat-value">{user.name}</div>
              <div class="stat-title">Tasks done</div>
            </div>
            
          </div>
    </div>
</section>