<script lang="ts">
  import Icon from "@iconify/svelte";
</script>

<div class="alert alert-warning rounded-md border-0 border-l-4 border-[#e13238] text-left text-[#fff]">
  <div>
    <h2 class="mb-0.5 flex items-center gap-2 text-base uppercase sm:mb-2">
      <Icon
        class="text-lg sm:text-2xl"
        icon="uis:exclamation-triangle"
      /> ВАЖНО
    </h2>
    <div class="text-sm leading-normal sm:text-base">
      <slot />
    </div>
  </div>
</div>
