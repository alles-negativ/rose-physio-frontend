<template>
  <VueIfBot>
    <cookie-consent>
      <template slot="message">
        <p>This website uses cookies</p>
        <a class="btn btn-link" href="/my-cookies">
          <p>
            Read more
          </p>
        </a>
      </template>
      <template slot="button">
        <div class="accept__button">
          <p class="accept__text">Accept</p>
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
