<template>
  <div class="header">
    <div class="header__links">
      <nuxt-link :to="localePath('index')">
        <img class="header__links--logo" src="/logo_c.svg" alt="Logo Rose Physio">
      </nuxt-link>
      <!-- <img class="header__links--logo" src="/logo_c.svg" alt=""> -->
      <div class="header__links--utility">
        <BookingBtn />
        <LanguageInput />
      </div>  
    </div>
    <div class="header__content">
      <div class="header__content--text">
        <span class="splitting__header" v-html="header.headertext" />
      </div>
    </div>  
  </div>
</template>

<script>
import linkClickRouting from "../../mixins/linkClickRouting";
import animationsHeader from "../../mixins/animationsHeader";

export default {
  name: 'Headerhome',

  mixins: [
    linkClickRouting, 
    animationsHeader
  ],

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
    // this.$Splitting()
  },
  updated() {
    // this.$Splitting()
  }
}
</script>

<style lang="scss" scoped>
    @use "Headerhome";
</style>