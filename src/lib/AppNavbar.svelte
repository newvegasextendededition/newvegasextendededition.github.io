<script lang="ts">
  import { page } from "$app/stores";
  import Icon from "@iconify/svelte";
  import ModalDonate from "./ModalDonate.svelte";

  export let navPos: String = $page.url.pathname === "/" ? "fixed" : "sticky";

  let scrollY: number;
  let navBackground: string;
  let labelButton: HTMLLabelElement;
  let donateModalOpenState: boolean;

  $: navBackground = $page.url.pathname === "/" ? `background: rgba(0,0,0, ${scrollY / 500 > 0.75 ? 0.75 : scrollY / 500}` : "";

  const navLinks = [
    {
      label: "Главная страница",
      icon: "heroicons:home-solid",
      href: "/",
    },
    {
      label: "Установка",
      icon: "ic:round-download-for-offline",
      href: "/install",
    },
    {
      label: "Помощь",
      icon: "material-symbols:help-rounded",
      href: "/help",
    },
    {
      label: "Чейнджлог",
      icon: "ion:list-circle-sharp",
      href: "/changelog",
    },
  ];

  function disableScroll(e: Event) {
    const checkbox = e.target;
    if (!(checkbox instanceof HTMLInputElement)) return;
    checkbox.labels?.forEach((label) => {
      if (label.classList.contains("btn-ghost")) {
        labelButton = label;
      }
    });

    if (checkbox.checked) {
      document.body.classList.add("overflow-hidden");

      if (labelButton) {
        labelButton.classList.remove("opacity-75");
        labelButton.classList.add("opacity-0");
      }
    } else {
      document.body.classList.remove("overflow-hidden");

      if (labelButton) {
        labelButton.classList.add("opacity-75");
        labelButton.classList.remove("opacity-0");
      }
    }
  }
</script>

<svelte:window bind:scrollY />

<nav
  style={navBackground}
  class="hidden lg:navbar {$page.url.pathname === '/' ? '' : 'bg-neutral'} {navPos} left-0 top-0 z-10 flex justify-center px-0"
>
  <div class="container flex justify-between">
    <a
      class="navbar-start w-fit text-2xl font-bold transition-all hover:text-accent hover:opacity-90"
      href="/"
      class:text-accent={$page.url.pathname === "/"}>EXTENDED EDITION</a
    >
    <div class="navbar-end flex gap-5 font-bold">
      {#each navLinks.slice(1) as navLink}
        <a
          class="uppercase transition-colors hover:text-accent"
          href={navLink.href}
          class:text-accent={$page.url.pathname === navLink.href}>{navLink.label}</a
        >
      {/each}
      <button
        class="font-bold uppercase transition-colors hover:text-accent"
        aria-label="Реквизиты автора"
        on:click={() => {
          donateModalOpenState = true;
        }}
      >
        Донат
      </button>
    </div>
  </div>
</nav>

<div class="drawer drawer-end z-10 lg:hidden">
  <input
    on:change={(e) => disableScroll(e)}
    id="drawerMobile"
    type="checkbox"
    class="drawer-toggle"
  />
  <div class="drawer-content">
    <!-- Page content here -->
    <label
      for="drawerMobile"
      class="btn btn-circle btn-ghost fixed right-2 top-2 h-10 min-h-0 w-10 opacity-75 transition-opacity"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="inline-block h-6 w-6 stroke-current"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        ></path></svg
      >
    </label>
  </div>
  <div class="drawer-side">
    <label
      for="drawerMobile"
      class="drawer-overlay"
    ></label>
    <ul class="flex min-h-full w-fit list-none items-center justify-center gap-8 bg-primary bg-opacity-80 p-4 text-5xl text-base-content backdrop-blur-sm">
      <!-- Sidebar content here -->
      {#each navLinks as navLink}
        <li>
          <a
            aria-label={navLink.label}
            class="p-0 uppercase transition-colors hover:text-accent"
            href={navLink.href}
            class:text-accent={$page.url.pathname === navLink.href}
          >
            <Icon icon={navLink.icon} />
          </a>
        </li>
      {/each}
      <li>
        <button
          aria-label="Реквизиты автора"
          on:click={() => {
            donateModalOpenState = true;
          }}
          class="transition-colors hover:text-accent"
        >
          <Icon icon="ph:wallet-fill" />
        </button>
      </li>
    </ul>
  </div>
</div>

<ModalDonate bind:donateModalOpenState />
