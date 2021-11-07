<template>
  <div class="header">
    <div class="header__links">
      <nuxt-link class="header__link--logo" :to="localePath('/')">
        <img src="~/assets/images/logo.svg" alt="">
      </nuxt-link>
      <div class="header__links--utility">
        <p class="text__menu">{{ sitetitle }}</p>
        <LanguageInput />
      </div>  
    </div>
    <div class="header__content">
      <div class="header__content--text">
        <span v-html="title" />
        <p class="text">{{ text }}</p>
      </div>
      <div class="header__content--image">
      </div>
    </div>  
  </div>
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
    },
    sitetitle() {
      return this.$store.getters['header/getSitetitle']
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