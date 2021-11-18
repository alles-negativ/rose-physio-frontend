<template>
  <div>
    <nuxt-link v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
      <div class="text text__menu">
        {{ locale.name }}
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