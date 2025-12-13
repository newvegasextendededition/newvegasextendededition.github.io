<script lang="ts">
  import AlertWarning from "$lib/AlertWarning.svelte";
  import AlertInfo from "$lib/AlertInfo.svelte";
  import ListAccordion from "$lib/ListAccordion.svelte";
  import VideoObserver from "$lib/VideoObserver.svelte";

  let installMain: HTMLElement;
  let videos: HTMLVideoElement[] = [];
</script>

<main
  bind:this={installMain}
  class="mb-10"
>
  <div class="container leading-relaxed">
    <!-- First Step -->
    <div>
      <h2 class="mb-2 text-xl">ЗАПУСК И НАСТРОЙКА УСТАНОВЩИКА</h2>
      <ul class="gap-1 text-sm text-secondary sm:text-base">
        <li>
          <p>
            <a
              class="relative before:absolute before:left-1/2 before:top-0 before:-translate-x-1/2 before:text-sm before:text-secondary before:opacity-0 before:transition-all before:content-['12.12.25.1'] hover:before:-top-3.5 hover:before:opacity-100"
              href="https://discord.com/invite/cRqSMb34eU"
              target="_blank">Скачиваем торрент</a
            > <a href="https://files.catbox.moe/8oq6c4.torrent">(зеркало)</a>, запускаем "Fallout New Vegas Extended Edition.exe".
          </p>
        </li>

        <li>
          <p class="mb-4">Выбираем путь установки сборки, жмем далее.</p>

          <!-- Disclaimer -->
          <AlertWarning>
            <p>
              В пути установки <strong>не должно</strong> быть кириллицы, <strong>нельзя</strong> ставить в Program Files и Program Files (x86) и в любые другие системные папки.
            </p>
          </AlertWarning>
        </li>

        <li class="mt-4"><p>Жмем установить и ждем окончания.</p></li>
      </ul>
    </div>
    <!-- Divider -->
    <div class="divider"></div>
    <!-- Second Step -->
    <div>
      <h2 class="mb-2 text-xl">ИГРАЕМ</h2>
      <ul class="gap-1 text-sm text-secondary sm:text-base">
        <li>
          <p>Запускаем "New Vegas EE" с рабочего стола.</p>
        </li>
        <li>
          <p>Настраиваем сборку в разделе "Настройки сборки" по своему желанию и играем.</p>
        </li>
      </ul>
    </div>
    <!-- Divider -->
    <div class="divider"></div>
    <!-- Credits -->
    <div class="flex flex-col gap-0.5 text-secondary">
      <h2 class="mb-2 text-xl">СПАСИБО ЗА УСТАНОВКУ!</h2>
      <div class="text-sm sm:text-base">
        <p class="mb-2">Мохавская пустошь заждалась тебя, Курьер. <strong>Extended Edition</strong> готов к игре! Спасибо за проявленный интерес к сборке, <strong>удачной игры</strong>!</p>
        <p><strong>Важно</strong> отметить, Extended Edition <strong>не поддерживает</strong> установку собственных модификаций. При возникновении проблем, помощь оказана <strong>не будет</strong>.</p>
        <p>Предоставляется по принципу "Как Есть", <strong>без каких либо гарантий и ответственности</strong>, для личного некоммерческого ознакомления.</p>
        <p>Конструктивная и обоснованная критика, замечания, указание на ошибки приветствуются и будут рассмотрены. Принятие решения о внедрение и общей возможности реализации, <strong>остаются на усмотрение автора</strong>.</p>
        <p class="mb-2">Не желающих мириться с таким положением вещей, прошу <strong>игнорировать</strong> и <strong>не устанавливать</strong> данную сборку.</p>
        <p>Еще раз спасибо за установку, <strong>приятного пребывания в Нью-Вегасе</strong>.</p>
        <p class="mt-4"><span class="italic">- <strong>Алан</strong>, автор <strong>Fallout Extended Edition</strong>.</span></p>
      </div>
    </div>
  </div>
</main>

<VideoObserver {videos} />

<style>
  a {
    @apply link-accent link transition-colors;
  }
</style>
