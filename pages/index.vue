<template>
  <main>
      <Articles />
  </main>
</template>

<script>
export default {
  layout: 'home',
  async asyncData({ app, $kirby }) {
    const { json: page } = await $kirby.find({
      "query": "page('home')"
    }, app.i18n.locale)
    return { page }
  },
  head() {
    return {
      titleTemplate: '%s - ' + this.page.content.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.content.meta_description,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.page.content.meta_keywords,
        },
        {
          hid: 'locale',
          name: 'locale',
          content: this.$i18n.locale,
        },
      ]
    }
  }
}
</script>