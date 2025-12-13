<script lang="ts">
  import Header from "./components/header.svelte";
  import Main from "./components/main.svelte";
</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>Чейнджлог | Extended Edition</title>
  <meta
    name="title"
    content="Чейнджлог | Extended Edition"
  />
  <meta
    name="description"
    content="Чейнджлог сборки Fallout New Vegas Extended Edition."
  />

  <!-- Open Graph / Facebook -->
  <meta
    property="og:type"
    content="website"
  />
  <meta
    property="og:url"
    content="https://newvegasextendededition.github.io/changelog"
  />
  <meta
    property="og:title"
    content="Чейнджлог | Extended Edition"
  />
  <meta
    property="og:description"
    content="Чейнджлог сборки Fallout New Vegas Extended Edition."
  />
  <meta
    property="og:image"
    content="https://newvegasextendededition.github.io/metaImage.webp"
  />

  <!-- Twitter -->
  <meta
    property="twitter:card"
    content="summary_large_image"
  />
  <meta
    property="twitter:url"
    content="https://newvegasextendededition.github.io/changelog"
  />
  <meta
    property="twitter:title"
    content="Чейнджлог | Extended Edition"
  />
  <meta
    property="twitter:description"
    content="Чейнджлог сборки Fallout New Vegas Extended Edition."
  />
  <meta
    property="twitter:image"
    content="https://newvegasextendededition.github.io/metaImage.webp"
  />
</svelte:head>

<Header />
<Main />
