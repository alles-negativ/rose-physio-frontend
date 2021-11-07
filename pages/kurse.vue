<template>
  <main>
    <h1>{{ page.content.contenttitle }}</h1>
    <p>{{ page.content.contenttext }}</p>
  </main>
</template>

<script>
export default {
  async asyncData({ app, params, $kirby, store }) {
    const { json: page } = await $kirby.find({
      "query": "page('kurse')"
    }, app.i18n.locale)
    // set header data
    store.commit('header/setTitle', page.content.headertitle)
    store.commit('header/setText', page.content.headertext)
    store.commit('header/setSitetitle', page.content.title)
    return { page }
  }
}
</script>