<template>
  <main id="content">
    <Stundenplan />
    <KurseListe />
    <div class="grid">
      <h1>{{ page.content.contenttitle }}</h1>
      <div v-html="page.content.contenttext"></div>
    </div>
  </main>
</template>

<script>
import metaTags from "../mixins/metaTags";

export default {
  mixins: [metaTags],
  
  async asyncData({ app, $kirby }) {
    const { json: page } = await $kirby.find({
      "query": "page('kurse')"
    }, app.i18n.locale)
    return { page }
  },
}
</script>