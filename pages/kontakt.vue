<template>
  <main id="content">
    <h3>{{ page.content.contenttitle }}</h3>
    <div v-html="page.content.contenttext"></div>
    <Standorte />
  </main>
</template>

<script>
import metaTags from "../mixins/metaTags";

export default {
  layout: 'contact',

  mixins: [metaTags],
  
  async asyncData({ app, $kirby }) {
    const { json: page } = await $kirby.find({
      "query": "page('kontakt')"
    }, app.i18n.locale)
    return { page }
  }
}
</script>