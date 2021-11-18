<template>
<div class="header__wrapper">
  <div class="header">
    <div class="header__links">
      <nuxt-link :to="localePath('/')">
        <img class="header__links--logo" src="~/assets/images/logo.svg" alt="">
      </nuxt-link>
      <div class="header__links--utility">
        <p class="text__menu">{{ header.title }}</p>
        <LanguageInput />
      </div>  
    </div>
    <div class="header__content">
      <div class="header__content--text">
        <h1>{{ header.headertitle }}</h1>
        <p class="text__big">{{ header.headertext }}</p>
      </div>
        <div v-if="header.headerimage">
            <nuxt-img class="header__content--image" :src="header.images[0].url" />
        </div>
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
    }
  },
  async fetch() {
    const { json: data } = await this.$kirby.find({
        "query": "page('" + this.slug + "')",
          "select": {
              "title": true,
              "headertitle": true,
              "headertext": true,
              "headerimage": true,
              "images": {
                "query": "page.files",
                "select": {
                  "name": true,
                  "url": true
                }
              }
            }
    }, this.$nuxt.context.app.i18n.locale)
    this.header = data
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