<script lang="ts">
  import "../app.css";
  import AppFooter from "$lib/AppFooter.svelte";
  import AppNavbar from "$lib/AppNavbar.svelte";
  import { fade } from "svelte/transition";
  let navPos: String;

  export let data;
</script>

<AppNavbar {navPos} />
{#key data.url}
  <div
    class="flex-1"
    on:outroend={() => (navPos = data.url === "/" ? "fixed" : "sticky")}
    in:fade={{ duration: 200, delay: 250 }}
    out:fade={{ duration: 200 }}
  >
    <slot />
  </div>
{/key}
<AppFooter />
