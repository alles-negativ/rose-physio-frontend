<template>
  <main>
    <h3>{{ page.content.contenttitle }}</h3>
    <p>{{ page.content.contenttext }}</p>
    <Standorte />
  </main>
</template>

<script>
export default {
  async asyncData({ app, params, $kirby, store }) {
    const { json: page } = await $kirby.find({
      "query": "page('kontakt')"
    }, app.i18n.locale)
    store.commit('header/setTitle', page.content.headertitle)
    store.commit('header/setText', page.content.headertext)
    return { page }
  }
}
</script>