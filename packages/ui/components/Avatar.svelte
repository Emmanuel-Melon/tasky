<script lang="ts">
    export let src = "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg";
    export let alt = "Failed to load image";
    export let size = "10";
</script>

<div class="avatar">
  <div class={`w-${size} rounded-full`}>
    <img src={src} alt={alt}/>
  </div>
</div>
