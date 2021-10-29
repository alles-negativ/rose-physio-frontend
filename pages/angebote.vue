<template>
  <main>
    <div class="grid">
      <h1>{{ page.title }}</h1>
      <p>{{ page }}</p>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ app, params, $kirby, store }) {
    const { json: page } = await $kirby.find({
      "query": "page('angebote')"
    }, app.i18n.locale)
    store.commit('header/setTitle', page.content.headertitle)
    store.commit('header/setText', page.content.headertext)
    return { page }
  }
}
</script>
