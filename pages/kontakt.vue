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
    await $kirby.find({
      "query": "page('kontakt')"
    }, app.i18n.locale).then((page) => {
      console.log(page.json)
      store.commit('header/setTitle', page.content.headertitle)
      store.commit('header/setText', page.content.headertext)
      return { page: page.json }
    })
  }
}
</script>