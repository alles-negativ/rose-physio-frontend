<template>
  <VueIfBot>
    <cookie-consent>
      <template slot="message">
        <p>{{ $t('cookie') }}</p>
      </template>
      <template slot="button">
        <div class="accept__button">
          <p class="accept__text">{{ $t('accept') }}</p>
        </div>
      </template>
    </cookie-consent>
  </VueIfBot>
</template>

<script>
  import VueIfBot from 'vue-if-bot/dist/vue-if-bot.es'
  import CookieConsent from 'vue-cookieconsent-component/src/components/CookieConsent.vue'

  export default {
    components: {
      VueIfBot,
      CookieConsent
    }
  }
</script>

<style lang="scss" scoped>
    @use "CookieBox";
</style>
