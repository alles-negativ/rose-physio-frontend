<template>
  <main id="content">
    <div class="grid">
      <h1>{{ page.content.contenttitle }}</h1>
      <p>{{ page.content.contenttext }}</p>
    </div>
    <AngeboteListe />
  </main>
</template>

<script>
export default {
  async asyncData({ app, $kirby }) {
    const { json: page } = await $kirby.find({
      "query": "page('angebote')"
    }, app.i18n.locale)
    return { page }
  } 
}
</script>
