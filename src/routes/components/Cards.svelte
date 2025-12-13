<script lang="ts">
  // Functions
  import { onDestroy, onMount } from "svelte";

  // Cards Interface
  interface Card {
    title: string;
    content: string;
    video: string;
    visible?: boolean;
  }

  // Construct Cards
  const cards: Card[] = [
    {
      title: "СОХРАНИ АУТЕНТИЧНОСТЬ, КАК ЭТО ЗАДУМЫВАЛИ РАЗРАБОТЧИКИ",
      content: "Сборка основана на моде JSawyer, созданном геймдизайнером оригинальной игры Джошем Сойером. Она бережно восстанавливает вырезанный контент и добавляет новые механики, которые органично вписываются в атмосферу оригинала. Игра остаётся верной своему духу, не отходя от того, как её задумывали разработчики.",
      video: "/assets/videos/firstCard.mp4",
    },
    {
      title: "ИГРАЙ ТАК, КАК ХОЧЕШЬ",
      content: "В сборке присутствует возможность тонкой настройки под собственный вкус! Легкое отключение всех кастомных текстур, погоды и глубокая настройка всего ребаланса. Все это доступно, и без лишних заморочек через лаунчер сборки.",
      video: "/assets/videos/secondCard.mp4",
    },
    {
      title: "ОЩУТИ НОВЫЙ УРОВЕНЬ ГЕЙМПЛЕЯ",
      content: "Механики старого New Vegas заметно устарели — сборка освежает их, добавляя функции, знакомые по современным играм: спринт, отдачу оружия, быстрый обыск и многое другое. Ребаланс делает навыки вроде харизмы по-настоящему значимыми и полезными.",
      video: "/assets/videos/thirdCard.mp4",
    },
  ];

  let cardElements: HTMLElement[] = [];
  let observer: IntersectionObserver;

  function getObserver() {
    if (observer) return;

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting || entry.target.getBoundingClientRect().top < window.scrollY) {
            let firstChild = entry.target.firstChild as HTMLElement;
            firstChild.classList.remove("translate-x-[-1999px]", "translate-x-[1999px]");

            let video = firstChild.querySelector("video.lazy") as HTMLVideoElement;

            if (video) {
              for (let source in video.children) {
                let videoSource = video.children[source] as HTMLSourceElement;
                if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                  videoSource.src = videoSource.dataset.src as string;
                }
              }
              video.load();
            }

            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "100px 0px",
      },
    );
  }

  // Video Lazy Loading and Transition For Cards
  onMount(() => {
    getObserver();

    if (cardElements.length > 0) {
      cardElements.forEach((card) => observer.observe(card));
    }
  });

  onDestroy(() => {
    if (cardElements.length > 0) {
      cardElements.forEach((card) => observer.unobserve(card));
    }
  });
</script>

<!-- Card Section -->
<section class="mb-10">
  <div class="container flex flex-col gap-8 text-center leading-relaxed lg:text-left">
    {#each cards as card, i}
      <!-- Card -->
      <div
        bind:this={cardElements[i]}
        class="flex justify-center overflow-hidden"
      >
        <div class="flex flex-col {i % 2 == 0 ? 'translate-x-[1999px]' : 'translate-x-[-1999px] lg:flex-row-reverse '} items-center justify-between gap-4 transition-all duration-500 lg:w-full lg:flex-row lg:gap-[1%]">
          <!-- Card Left -->
          <div class="shrink-0 lg:basis-[49%]">
            <h2
              class="mb-2 text-xl before:mx-auto before:mb-2 before:hidden
        before:h-1 before:w-1/12 before:rounded-lg before:bg-accent before:content-[''] sm:text-2xl lg:mb-4 lg:before:mx-0 lg:before:block
        "
            >
              {card.title}
            </h2>
            <p class="text-sm text-secondary sm:text-xl">
              {card.content}
            </p>
          </div>
          <video
            class="aspect-[588/331] shrink-0 rounded-lg sm:min-h-[331px] lg:basis-[49%]"
            class:lazy={i > 0}
            muted
            loop
            playsinline
            autoplay
            width="588"
            height="331"
          >
            <source
              src={i == 0 ? card.video : ""}
              data-src={card.video}
            />
          </video>
        </div>
      </div>
    {/each}
  </div>
</section>
