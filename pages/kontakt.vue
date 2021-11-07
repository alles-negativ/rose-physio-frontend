<template>
  <main>
    <h3>{{ page.content.contenttitle }}</h3>
    <p>{{ page.content.contenttext }}</p>
    <Standorte />
  </main>
</template>

<script>
export default {
  layout: 'contact',
  async asyncData({ app, params, $kirby, store }) {
    const { json: page } = await $kirby.find({
      "query": "page('kontakt')"
    }, app.i18n.locale)
    // set header data
    store.commit('header/setTitle', page.content.headertitle)
    store.commit('header/setText', page.content.headertext)
    store.commit('header/setSitetitle', page.content.title)
    return { page }
  }
}
</script>