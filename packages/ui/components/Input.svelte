<script lang="ts">
  export let type = 'text';
  export let placeholder = '';
  export let name;
</script>

<input {type} {placeholder} class="input input-bordered input-sm w-full" {name} />
