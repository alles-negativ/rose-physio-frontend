<template>
  <header>
    <div class="header__links">
      <nuxt-link class="header__logo" :to="localePath('/')">
        <img src="~/assets/images/logo.svg" alt="">
      </nuxt-link>
      <LanguageInput />
    </div>
    <p>this is the contact header</p>
    <h1 class="header__title">{{ title }}</h1>
    <p class="header__text">{{ text }}</p>
  </header>
</template>

<script>
export default {
  name: 'Header',

  computed: {
    title() {
      return this.$store.getters['header/getTitle']
    },
    text() {
      return this.$store.getters['header/getText']
    }
  }
}
</script>

<style lang="scss" scoped>
    @use "Headercontact";
</style>