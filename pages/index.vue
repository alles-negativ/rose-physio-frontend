<template>
  <main>
      <Articles />
  </main>
</template>

<script>
export default {
  async asyncData({ app, params, $kirby, store }) {
    const { json: page } = await $kirby.find({
      "query": "page('home')"
    }, app.i18n.locale)
    // set header data
    store.commit('header/setTitle', page.content.headertitle)
    store.commit('header/setText', page.content.headertext)
    return { page }
  }
}
</script>