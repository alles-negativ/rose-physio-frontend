<template>
  <div class="header">
    <div class="header__links">
      <nuxt-link :to="localePath('/')">
        <img class="header__links--logo" src="~/assets/images/logo.svg" alt="">
      </nuxt-link>
      <div class="header__links--utility">
        <p class="text__menu">{{ title }}</p>
        <LanguageInput />
      </div>  
    </div>
    <div class="header__content">
      <div class="header__content--text">
        <span class="splitting__header" v-html="header.headertext" />
        <p class="text"></p>
      </div>
        <div v-if="header.contentimage"  class="header__content--image">
        </div>
    </div>
      <div class="arrow" onclick="arrowScroll()">
          <img class="arrow__img" src="~/assets/images/arrow.svg" alt="">
      </div>
  </div>
</template>

<script>
import linkClickRouting from "../../mixins/linkClickRouting";

export default {
  name: 'Header',

  mixins: [linkClickRouting],

  data() {
    return {
      header: [],
      title: ""
    }
  },
  async fetch() {
    const { json: data } = await this.$kirby.find({
        "query": "page('" + this.slug + "')"
    }, this.$nuxt.context.app.i18n.locale)
    this.header = data.content
    this.title = data.title
  },
  computed: {
    slug() {
      const path = this.$route.name
      if (path.slice(0, path.length - 5) == "index") {
        return "home"
      } else {
        return path.slice(0, path.length - 5)
      }
    }
  },
  mounted() {
    this.$Splitting()
  },
  updated() {
    this.$Splitting()
  }
}
</script>

<style lang="scss" scoped>
    @use "Header";
</style>