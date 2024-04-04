<script lang="ts">
    import { onDestroy } from "svelte";
    import { selectedItem } from "./store";
    import autoAnimate from "@formkit/auto-animate";
  
    let selectedItemValue: number;
  
    const unsubscribe = selectedItem.subscribe((value) => {
      selectedItemValue = value;
    });
  
    const items = [
      { id: 1, name: "Profile" },
      { id: 2, name: "Account" }
    ];
  
    const handleItemChange = (id: number) => {
      selectedItem.set(id);
    };
  
    onDestroy(unsubscribe);
  </script>
  
  <section class="space-y-2">
    <div class="py-2 space-y-2">
      <h1 class="text-2xl">Settings</h1>
      <p>
        Here, you have full control over customizing your experience and
        personalizing your account according to your preferences.
      </p>
    </div>
  
    <div class="flex flex-col md:flex-row w-full gap-2">
      <div class="basis-2/5 grow">
          <ul class="menu bg-transparent w-full space-y-2" use:autoAnimate>
            {#each items as { id, name }}
              <li>
                <button
                  on:click={() => handleItemChange(id)}
                  class={selectedItemValue === id ? "active bg-gray-50" : ""}
                  >{name}</button
                >
              </li>
            {/each}
          </ul>
      </div>
      <div class="basis-3/4 space-y-4">
        <slot />
      </div>
    </div>
  </section>
  