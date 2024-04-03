<script lang="ts">
    import Icon from '@iconify/svelte';
    export let heading: String;
    export let CTA: String;
    export let id: String;
  </script>
  
  <!-- The button to open modal -->
  <label
    for={`${id}-modal`}
    class={`flex justify-center items-center btn btn-sm btn-primary gap-2`}>{CTA} <Icon icon="heroicons:plus" /></label
  >
  
  <!-- Put this part before </body> tag -->
  <input type="checkbox" id={`${id}-modal`} class="modal-toggle" />
  <div class="modal">
    <div class="modal-box">
      <div class="flex items-center justify-between">
        <h3 class="text-xl text-bold">{heading}</h3>
        <label
          id="close"
          for={`${id}-modal`}
          class="modal-backdrop btn btn-sm btn-square btn-ghost"
          ><Icon icon="heroicons:x-mark" /></label
        >
      </div>
      <slot />
    </div>
  </div>
  