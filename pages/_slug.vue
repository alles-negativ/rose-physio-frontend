<template>
  <div>
    <p>{{ page }}</p>
    <People />
  </div>
</template>

<script>
export default {
  name: 'Slug',
  async asyncData({ app, params, $kirby }) {
    const { json: page } = await $kirby.find({
      "query": "page('" + params.slug + "')"
    }, app.i18n.locale)
    return { page }
  }
}
</script>