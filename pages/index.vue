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
    return { page }
  }
}
</script>