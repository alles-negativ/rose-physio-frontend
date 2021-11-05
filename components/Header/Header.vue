<template>
  <header>
    <div class="header__links">
      <nuxt-link class="header__logo" :to="localePath('/')">
        <img src="~/assets/images/logo.svg" alt="">
      </nuxt-link>
      <LanguageInput />
    </div>
    <h1 class="header__title" v-html="title" />
    <p class="header__text">{{ text }}</p>
  </header>
</template>

<script>
import linkClickRouting from "../../mixins/linkClickRouting";

export default {
  name: 'Header',

  mixins: [linkClickRouting],

  computed: {
    title() {
      return this.$store.getters['header/getTitle']
    },
    text() {
      return this.$store.getters['header/getText']
    }
  },
  mounted() {
    // this.$Splitting()
  }
}
</script>

<style lang="scss" scoped>
    @use "Header";
</style>