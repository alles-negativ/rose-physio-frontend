<template>
  <header>
    <div class="header__links">
      <nuxt-link class="header__logo" :to="localePath('/')">
        <img src="~/assets/images/logo.svg" alt="">
      </nuxt-link>
      <LanguageInput />
    </div>
    <p>this is the contact header</p>
    <p class="text__small">{{ header.headeremail }}</p>
          <p class="text__small">{{ header.headertel }}</p>
          <p class="text__small">Öffnungszeiten <br>{{ header.headeropening }}</p>
    <h1 class="header__title">{{ title }}</h1>
    <p class="header__text">{{ text }}</p>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      header: []
    }
  },
  async fetch() {
    const { json: data } = await this.$kirby.find({
        "query": "page('" + this.slug + "')",
        "select": {
            "headeremail": true,
            "headertel": true,
            "headeropening": true,
        }
    }, this.$nuxt.context.app.i18n.locale)
    this.header = data
  },
  watch: {
      $route() {
        this.$fetch()
      },
  },
  computed: {
    title() {
      return this.$store.getters['header/getTitle']
    },
    text() {
      return this.$store.getters['header/getText']
    },
    slug() {
      const path = this.$route.name
      return path.slice(0, path.length - 5)
    }
  }
}
</script>

<style lang="scss" scoped>
    @use "Headercontact";
</style>