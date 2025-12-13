<script lang="ts">
  import Icon from "@iconify/svelte";
  import ModalDonate from "./ModalDonate.svelte";

  let donateModalOpenState: boolean;

  // Footer Links
  const links = [
    { link: "https://discord.com/invite/cRqSMb34eU", label: "Discord сервер сборки", icon: "mingcute:discord-fill" },
    { link: "https://steamcommunity.com/sharedfiles/filedetails/?id=2283791696", label: "Руководство сборки в Steam", icon: "mdi:steam" },
  ];
</script>

<footer class="navbar px-0">
  <!--* Footer Content -->
  <div class="container flex items-center">
    <!--* Footer Title -->
    <div class="flex-1 basis-1/3">
      <button
        aria-label="Пролистать наверх"
        class="text-base font-bold transition-colors hover:text-accent sm:text-2xl"
        on:click={() => window.scrollTo(0, 0)}>EXTENDED EDITION</button
      >
    </div>
    <!--* Author Text -->
    <div class="hidden flex-1 basis-1/3 text-center text-sm sm:block sm:text-base">Website & Design by Alan Berezov</div>
    <!--* Social Links -->
    <div class="flex flex-1 basis-1/3 justify-end gap-2 text-3xl sm:gap-4">
      <!--* Buttons -->
      <button
        aria-label="Реквизиты автора"
        on:click={() => {
          donateModalOpenState = true;
        }}
        class="transition-colors hover:text-accent"
      >
        <Icon icon="ph:wallet-fill" />
      </button>
      <!--* Links -->
      {#each links as link}
        <a
          class="transition-colors hover:text-accent"
          href={link.link}
          target="_blank"
          aria-label={link.label}
        >
          <Icon icon={link.icon} />
        </a>
      {/each}
    </div>
  </div>
</footer>

<ModalDonate bind:donateModalOpenState />
