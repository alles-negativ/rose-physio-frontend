<template>
  <main id="content">
    <h3>{{ page.content.contenttitle }}</h3>
    <div v-html="page.content.contenttext"></div>
    <Standorte />
    <Impressum />
  </main>
</template>

<script>
export default {
  layout: 'contact',
  async asyncData({ app, $kirby }) {
    const { json: page } = await $kirby.find({
      "query": "page('kontakt')"
    }, app.i18n.locale)
    return { page }
  }
}
</script>