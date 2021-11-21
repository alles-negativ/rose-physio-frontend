<template>
  <div>
    <nuxt-link v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
      <div class="switch">
        <p :class="locale.name" class="text__menu text__menu--de">DE</p>
        <p :class="locale.name" class="text__menu text__menu--en">EN</p>
      </div>
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
    @use "LanguageInput";
</style>