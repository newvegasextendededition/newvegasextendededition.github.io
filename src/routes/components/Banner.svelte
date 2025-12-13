<script lang="ts">
  import VideoObserver from "$lib/VideoObserver.svelte";
  let videos: HTMLVideoElement[] = [];
</script>

<section class="relative h-40">
  <!--* Video Background -->
  <div class="absolute -z-10 h-full w-full overflow-hidden">
    <video
      bind:this={videos[0]}
      class="h-[101%] w-full object-cover blur-sm brightness-[0.65]"
      muted
      playsinline
      loop
      autoplay
    >
      <source data-src="/assets/videos/banner.mp4" />
    </video>
  </div>
  <div class="container flex h-full flex-col items-center justify-center">
    <!--* Banner Description  -->
    <div class="text-center">
      <h2 class="mb-4 text-xl sm:mb-4 sm:text-3xl">ПОГРУЗИСЬ В АТМОСФЕРУ ЯДЕРНЫХ ПУСТОШЕЙ</h2>
      <a
        class="btn h-fit min-h-0 animate-pulse px-3 py-1 text-base sm:min-h-[3rem] sm:px-4 sm:text-2xl"
        href="/install">Скачать</a
      >
    </div>
  </div>
</section>

<VideoObserver {videos} />
