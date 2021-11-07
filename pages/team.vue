<template>
  <div>
    <div class="grid">
      <h1>{{ page.content.contenttitle }}</h1>
      <p>{{ page.content.contenttext }}</p>
    </div> 
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
    store.commit('header/setSitetitle', page.content.title)
    return { page }
  }
}
</script>