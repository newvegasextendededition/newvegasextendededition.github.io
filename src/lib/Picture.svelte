<script lang="ts">
  type ImgProps = {
    src: string;
    w: number;
  };

  type ImgPropsH = ImgProps & { h: number };

  type ImgMeta = {
    img: ImgPropsH;
    sources: { [mimeType: string]: ImgProps[] };
  };

  export let meta: string | ImgMeta | ImgMeta[];
  let isString = false;
  let urlString: string;
  let metaArray: ImgMeta[];

  $: {
    if (typeof meta === "string") {
      isString = true;
      urlString = meta;
      metaArray = [];
    } else {
      isString = false;
      metaArray = Array.isArray(meta) ? meta : [meta];
    }
  }

  $: fallback = !isString && metaArray.length > 0 ? metaArray[0].img : null;
  $: sources = !isString && metaArray.length > 0 ? (metaArray[0].sources as Record<string, ImgProps[]>) : {};

  export let sizes = "100vw";
  export let alt = "";
  export let loading: "lazy" | "eager" | null | undefined = "lazy";
  export let imageClass = "";
  export let pictureClass = "";
</script>

{#if isString}
  <img
    src={urlString}
    {alt}
    loading={loading ?? undefined}
    class={imageClass}
  />
{:else if fallback}
  <div style={`max-width: ${fallback.w}px`}>
    <picture class={pictureClass}>
      {#each Object.entries(sources) as [mimeType, srcMetaArray]}
        <source
          type={"image/" + mimeType}
          {sizes}
          srcset={srcMetaArray.map((m) => `${m.src} ${m.w}w`).join(", ")}
        />
      {/each}
      <img
        decoding="async"
        src={fallback.src}
        {alt}
        loading={loading ?? undefined}
        class={imageClass}
      />
    </picture>
  </div>
{:else}
  <img
    src=""
    {alt}
    loading={loading ?? undefined}
    class={imageClass}
  />
{/if}
