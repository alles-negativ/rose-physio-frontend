<template>
  <div>
    <h3>{{ page.content.contenttitle }}</h3>
    <p>{{ page.content.contenttext }}</p>
    <People />
  </div>
</template>

<script>
export default {
  name: 'Team',
  async asyncData({ app, params, $kirby, store }) {
    const { json: page } = await $kirby.find({
      "query": "page('team')"
    }, app.i18n.locale)
    store.commit('header/setTitle', page.content.headertitle)
    store.commit('header/setText', page.content.headertext)
    return { page }
  }
}
</script>