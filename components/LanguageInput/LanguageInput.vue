<template>
  <div class="language__switch">
    <nuxt-link v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
      {{ locale.name }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  }
}
</script>

<style lang="scss" scoped>
    .language__switch a {
      font-family: SpaceGrotesk;
      font-weight: 400;
      font-style: normal;
      font-size: 16px;
      line-height: 16px;
      text-decoration: none;
      color: black;
       &:hover {
         font-style: italic;
       }
    }
</style>