<template>
  <main id="content">
    <div class="grid">
      <h1>{{ page.content.contenttitle }}</h1>
      <div v-html="page.content.contenttext"></div>
    </div> 
    <People />
  </main>
</template>

<script>
export default {
  name: 'Team',
  async asyncData({ app, $kirby }) {
    const { json: page } = await $kirby.find({
      "query": "page('team')"
    }, app.i18n.locale)
    return { page }
  }
}
</script>