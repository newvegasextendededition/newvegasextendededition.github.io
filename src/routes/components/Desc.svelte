<script lang="ts">
  import Picture from "$lib/Picture.svelte";
  let image = "/assets/images/ranger.webp";
</script>

<!-- Section Description -->
<section class="mb-10">
  <div class="container flex flex-col items-center text-center text-sm sm:text-xl">
    <a
      target="_blank"
      href="https://www.reddit.com/r/Fallout/comments/3dwjg0/ncr_ranger_armor_vector_drawing/"
      class="mb-4 h-[150px] w-[150px] sm:h-[200px] sm:w-[200px]"
    >
      <Picture
        meta={image}
        alt="Vector image by BlueScreen1985"
        sizes="200px"
        loading="eager"
      />
    </a>
    <h2 class="mb-4 text-xl sm:text-2xl">НОВЫЕ ОЩУЩЕНИЯ ОТ ЛЮБИМОЙ ИГРЫ</h2>
    <p>Получи новый опыт от старой игры с расширенными возможностями!</p>
    <p>
      <strong class="text-accent">EXTENDED EDITION</strong> - сборка модов, приоритетной целью, которой являются
    </p>
    <p class="mb-4">
      <strong>стабильность, лорность, быстродействие и геймплей</strong>.
    </p>
    <p>
      Освежите оригинал, чтобы он чувствовался приятнее, но при этом оставался все тем же нашим <b class="text-accent">НОВЫМ ВЕГАСОМ</b>.
    </p>
  </div>
</section>
