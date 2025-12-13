<script lang="ts">
  import { onDestroy, onMount } from "svelte";

  // Video Lazy Loading
  export let videos: HTMLVideoElement[] = [];
  let observer: IntersectionObserver | null;

  function getObserver() {
    if (observer != null) return;

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((video) => {
          let videoElement = video.target as HTMLVideoElement;

          if (video.isIntersecting) {
            for (let source of videoElement.children) {
              let videoSource = source as HTMLSourceElement;
              videoSource.src = videoSource.dataset.src as string;
            }

            videoElement.load();
            observer?.unobserve(videoElement);
          }
        });
      },
      {
        rootMargin: "200px 0px",
      },
    );
  }

  onMount(() => {
    observer?.disconnect();
    observer = null;
    getObserver();
    videos.forEach((video) => observer?.observe(video));
  });

  onDestroy(() => {
    if (observer) {
      observer.disconnect();
      observer = null;
    }
  });
</script>
