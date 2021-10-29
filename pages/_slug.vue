<template>
  <div>
    <h3>{{ page.content.headertitle }}</h3>
    <p>{{ page.content.headertext }}</p>
    <h3>{{ page.content.contenttitle }}</h3>
    <p>{{ page.content.contenttext }}</p>
    <People />
  </div>
</template>

<script>
export default {
  name: 'Slug',
  async asyncData({ app, params, $kirby, store }) {
    const { json: page } = await $kirby.find({
      "query": "page('" + params.slug + "')"
    }, app.i18n.locale)
    store.commit('header/setTitle', page.content.headertitle)
    return { page }
  }
}
</script>