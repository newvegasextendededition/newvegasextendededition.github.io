<script lang="ts">
  import { onMount } from "svelte";

  let collapses: Collapse[] = [];

  onMount(async () => {
    const res = await fetch("https://raw.githubusercontent.com/newvegasextendededition/nveedocs/refs/heads/main/changelog.json");
    const data: DocsJsonItem[] = await res.json();

    collapses = data.map((item: DocsJsonItem) => ({
      ...item,
      description: Array.isArray(item.description) ? item.description : (item.description ?? "").split("\n"),
    }));
  });
</script>

<main class="mb-10">
  <div class="container leading-relaxed">
    {#each collapses as collapse, i}
      <div class="collapse rounded-none">
        <input
          class="peer"
          type="checkbox"
        />
        <h2 class="collapse-title p-0 text-lg font-bold transition-colors peer-hover:text-accent sm:text-xl">{collapse.title}</h2>
        <div class="collapse-content text-sm text-secondary sm:text-base">
          <ul>
            {#each collapse.description as item}
              <li>{@html item}</li>
            {/each}
          </ul>
        </div>
      </div>
      {#if i !== collapses.length - 1}
        <!-- Divider -->
        <div class="divider my-1.5"></div>
      {/if}
    {/each}
  </div>
</main>

<style>
  /* Styles for Collapse element */
  .collapse-title,
  :where(.collapse > input[type="checkbox"]),
  :where(.collapse > input[type="radio"]) {
    min-height: auto;
  }

  .collapse:focus:not(.collapse-close) :where(.collapse-content),
  .collapse:not(.collapse-close) :where(input[type="checkbox"]:checked ~ .collapse-content),
  .collapse:not(.collapse-close) :where(input[type="radio"]:checked ~ .collapse-content) {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
</style>
