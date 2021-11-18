<template>
  <VueIfBot>
    <cookie-consent>
      <template slot="message">
        <p>This website uses cookies</p>
        <p>
          <a class="btn btn-link" href="/my-cookies">Read more</a>
        </p>
      </template>
      <template slot="button">
        <button class="btn btn-info">Accept</button>
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
