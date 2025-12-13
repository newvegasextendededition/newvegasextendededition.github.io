<script lang="ts">
  import { onMount } from "svelte";
  import Picture from "$lib/Picture.svelte";
  import VideoObserver from "$lib/VideoObserver.svelte";

  let mainContainer: HTMLElement;
  let videos: HTMLVideoElement[] = [];
  let collapses: Collapse[] = [];

  // Function to convert [link=URL]Text[link] to <a href="URL" target="_blank">Text</a>
  function parseLinks(text: string): string {
    return text.replace(/\[link=(.+?)\](.+?)\[link\]/g, '<a href="$1" target="_blank" class="link-accent link transition-colors">$2</a>');
  }

  onMount(async () => {
    let links = mainContainer.querySelectorAll("a");
    links.forEach((link) => {
      link.classList.add("link", "link-accent", "transition-colors");
    });

    const res = await fetch("https://raw.githubusercontent.com/newvegasextendededition/nveedocs/refs/heads/main/faq.json");
    const data: DocsJsonItem[] = await res.json();

    collapses = data.map((item: DocsJsonItem) => ({
      ...item,
      description: Array.isArray(item.description) ? item.description.map(parseLinks) : (item.description ?? "").split("\n").map(parseLinks),
    }));
  });
</script>

<main class="mb-10">
  <div
    bind:this={mainContainer}
    class="container leading-relaxed"
  >
    {#each collapses as collapse, i}
      <div class="collapse rounded-none">
        <input
          class="peer"
          type="checkbox"
        />
        <h2 class="collapse-title p-0 text-lg font-bold transition-colors peer-hover:text-accent sm:text-xl">{collapse.title}</h2>
        <div class="collapse-content pl-0 pr-0 text-sm text-secondary sm:pl-4 sm:text-base">
          <!-- Content -->
          {#each collapse.description as item}
            <p class="leading-normal">{@html item}</p>
          {/each}
          {#if collapse.image}
            <!-- Image -->
            <div class="mt-4 rounded-md">
              <Picture
                imageClass="rounded-md"
                meta={collapse.image}
                alt="Скриншот"
                sizes="600px"
              />
            </div>
          {/if}
          {#if collapse.video}
            <video
              bind:this={videos[i]}
              muted
              autoplay
              playsinline
              loop
              class="mt-4 aspect-video w-full rounded-md object-cover"
            >
              <source data-src={collapse.video} />
            </video>
          {/if}
        </div>
      </div>
      {#if i !== collapses.length - 1}
        <!-- Divider -->
        <div class="divider my-1.5"></div>
      {/if}
    {/each}
  </div>
</main>

{#if videos.length != 0}
  <VideoObserver {videos} />
{/if}

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
