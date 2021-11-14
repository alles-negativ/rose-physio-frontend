<template>
  <main id="content">
    <div class="grid">
      <h1>Stundenplan</h1>
    </div>
    <Stundenplan />
    <KurseListe />
    <div class="grid">
      <h1>{{ page.content.contenttitle }}</h1>
      <p>{{ page.content.contenttext }}</p>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ app, params, $kirby, store }) {
    const { json: page } = await $kirby.find({
      "query": "page('kurse')"
    }, app.i18n.locale)
    return { page }
  }
}
</script>