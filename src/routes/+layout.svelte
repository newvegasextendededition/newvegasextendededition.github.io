<script lang="ts">
  import "../app.css";
  import AppFooter from "$lib/AppFooter.svelte";
  import AppNavbar from "$lib/AppNavbar.svelte";
  import { fade } from "svelte/transition";
  import { afterNavigate, disableScrollHandling } from "$app/navigation";
  import { onMount } from "svelte";
  let navPos: String;

  export let data;

  onMount(() => {
    disableScrollHandling();
  });

  afterNavigate(() => {
    disableScrollHandling();
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 250);
  });
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
