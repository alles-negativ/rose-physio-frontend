<template>
  <main>
      <Articles />
  </main>
</template>

<script>
export default {
  layout: 'home',
  async asyncData({ app, params, $kirby, store }) {
    const { json: page } = await $kirby.find({
      "query": "page('home')"
    }, app.i18n.locale)
    // set header data
    store.commit('header/setTitle', page.content.headertext)
    store.commit('header/setText', "")
    return { page }
  }
}
</script>