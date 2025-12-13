<script lang="ts">
  import { onMount } from "svelte";
  import AlertWarning from "$lib/AlertWarning.svelte";

  // Add link styles onMount particularly for this page
  let headerContainer: HTMLElement;
  onMount(() => {
    let links = headerContainer.querySelectorAll("a");
    links.forEach((link) => {
      link.classList.add("link", "link-accent", "transition-colors");
    });
  });
</script>

<header class="mt-10">
  <div
    bind:this={headerContainer}
    class="container leading-relaxed"
  >
    <!-- Introduction -->
    <div class="mb-4">
      <h1 class="mb-4 text-2xl">УСТАНОВКА FALLOUT EXTENDED EDITION</h1>
      <p class="text-base text-secondary">Спасибо за проявленный интерес! Данная страница поможет Вам с установкой.</p>
    </div>

    <!-- Divider -->
    <div class="divider"></div>
    <!-- Before begin -->
    <div>
      <h2 class="mb-2 text-xl">ПЕРЕД НАЧАЛОМ</h2>
      <ul class="gap-2">
        <li class="text-sm text-secondary sm:text-base"><strong>Достижения и Steam Cloud работают</strong> если есть купленная игра в Steam, MO2 все сам подключит, скачанная игра <strong>НЕ ТРЕБУЕТСЯ</strong></li>
        <li class="text-sm text-secondary sm:text-base">Сборка автономна, <strong>лицензия или скачанная игра НЕ требуются</strong></li>
        <li class="text-sm text-secondary sm:text-base">Все <strong>DLC и Pre-Order паки включены</strong>, спрятаны по миру, где именно смотрите в разделе <a href="/help">ПОМОЩЬ</a></li>
        <li class="text-sm text-secondary sm:text-base"><strong>Новая игра обязательна</strong>, старые сохранения <strong>НЕ</strong> поддерживаются</li>
        <li class="text-sm text-secondary sm:text-base">Для <strong>обладателей европейской версии (без приставки PCR)</strong> в Steam - потребуется переключить на EU в настройках сборки</li>
        <li class="text-sm text-secondary sm:text-base">Функции EGS и GOG <strong>НЕ поддерживаются</strong></li>
        <li class="text-sm text-secondary sm:text-base">
          Требуется <strong>Windows 10 64-bit и выше</strong>,
          <a
            target="_blank"
            href="https://www.techpowerup.com/download/visual-c-redistributable-runtime-package-all-in-one/">Visual C++</a
          >,
          <a
            href="https://www.microsoft.com/en-in/download/details.aspx?id=35"
            target="_blank">DirectX</a
          >, <strong>обновленные драйвера видеокарты</strong>; 25 ГБ для загрузки, 50 ГБ для установки
        </li>
        <li class="text-sm text-secondary sm:text-base">Начинать новую игру рекомендуется после каждого <strong>КРУПНОГО</strong> обновления сборки</li>
        <li class="text-sm text-secondary sm:text-base">
          Рекомендуемый <strong>торрент-клиент</strong> для скачивания сборки:
          <a
            href="https://www.qbittorrent.org/"
            target="_blank">qBittorrent</a
          >
        </li>
      </ul>
    </div>
    <!-- Divider -->
    <div class="divider"></div>
  </div>
</header>
