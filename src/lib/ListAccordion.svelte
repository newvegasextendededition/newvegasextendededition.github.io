<script lang="ts">
  export let title: string;

  //   Accordion Function
  function openAccordion(e: Event) {
    let accordionButton = e.target as HTMLElement;
    let accordionTitle = accordionButton.parentElement as HTMLElement;
    let accordionContent = accordionTitle.nextElementSibling as HTMLElement;

    accordionTitle.classList.toggle("text-accent");
    accordionContent.classList.toggle("grid-rows-[1fr]");
  }
</script>

<li>
  <!-- Title -->
  <h3 class="font-normal">
    <button
      class="underline transition-colors hover:text-accent"
      on:click={openAccordion}>{title}</button
    >
  </h3>
  <!-- Content -->
  <div class="grid grid-rows-[0fr] transition-all">
    <!-- Content Wrapper -->
    <div class="overflow-hidden pl-2">
      <slot />
    </div>
  </div>
</li>
