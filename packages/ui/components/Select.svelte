<script lang="ts">
  export let options = [];
  export let value = '';
  export let handler;
</script>

<select bind:value on:change={handler} class="select select-sm select-bordered w-full max-w-xs">
  <option disabled selected>Filter</option>
  {#each options as option}
    <option>{option.label}</option>
  {/each}
</select>
