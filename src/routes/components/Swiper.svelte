<script lang="ts">
  import type { Swiper } from "swiper/types";
  // Images
  import imageArray from "./SwiperImageImport";

  // Functions
  import { onDestroy, onMount } from "svelte";
  import { register, type SwiperContainer } from "swiper/element/bundle";
  import Picture from "$lib/Picture.svelte";

  register();

  let slider: HTMLElement;
  let swiperContainer: SwiperContainer;
  let swiper: Swiper;
  let observer: IntersectionObserver;
  let swiperVisible: boolean = false;
  let mediaQuery: MediaQueryList;

  function getObserver() {
    if (observer) return;

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let firstChild = entry.target.firstChild as HTMLElement;
            firstChild.classList.remove("scale-[0.001%]");
            swiper.autoplay.start();
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "200px 0px",
      },
    );
  }

  onMount(() => {
    mediaQuery = window.matchMedia("(min-width: 768px)");
    swiperVisible = true;
    getObserver();
    swiper = swiperContainer.swiper;
    swiper.autoplay.stop();
    if (!mediaQuery.matches) {
      swiper.pagination.destroy();
    }
    observer.observe(slider);
  });

  onDestroy(() => {
    if (slider) {
      observer.unobserve(slider);
    }
  });
</script>

<svelte:window
  on:resize={window.matchMedia("(min-width: 768px)").matches
    ? () => {
        swiperContainer.swiper.pagination.init();
        swiperContainer.swiper.pagination.update();
      }
    : () => {
        swiperContainer.swiper.pagination.destroy();
      }}
/>

<!-- Swiper -->
<section class="mb-10">
  <div class="container overflow-hidden leading-relaxed">
    <div
      bind:this={slider}
      class="aspect-video w-full"
    >
      <swiper-container
        bind:this={swiperContainer}
        class="scale-[0.001%] transition-all duration-1000"
        navigation="true"
        rewind="true"
        pagination="true"
        keyboard={{ enabled: true, onlyInViewport: true }}
        autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
        loadOnTransitionStart="true"
        effect="coverflow"
      >
        {#each { length: 30 } as _, i}
          <swiper-slide
            class:hidden={!swiperVisible}
            class="aspect-video"
            lazy="true"
          >
            <Picture
              meta={imageArray[i]}
              alt="Скриншот"
              sizes="1200px"
            />
          </swiper-slide>
        {/each}
      </swiper-container>
    </div>
  </div>
</section>

<style lang="scss">
  swiper-container {
    --swiper-theme-color: #ff4500;
    --swiper-navigation-size: 16px;
    --swiper-pagination-bullet-size: 4px;
  }

  @media (min-width: 640px) {
    swiper-container {
      --swiper-pagination-bullet-size: 8px;
      --swiper-navigation-size: 32px;
    }
  }
</style>
