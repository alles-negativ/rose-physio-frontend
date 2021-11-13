<template>
  <div class="header">
    <div class="header__links">
      <nuxt-link :to="localePath('/')">
        <img class="header__links--logo" src="~/assets/images/logo.svg" alt="">
      </nuxt-link>
      <div class="header__links--utility">
        <p class="text__menu">{{ sitetitle }}</p>
        <LanguageInput />
      </div>  
    </div>
    <div class="header__content">
      <div class="header__content--text">
        <span v-html="title" />
        <p class="text__big">{{ text }}</p>
        <p class="text">{{ contact.headertram }}</p>
        <p class="text">{{ contact.headeropening }}</p>
      </div>  
        <div class="header__content--contact">
          <a class="text text__big--black" href="mailto:info@rose-physio-fake.ch?subject=Termin&body=Guten%20Tag%2C%0A%0Aich%20w%C3%BCrde%20gerne%20einen%20Termin%20abmachen.%0A%0AGruss">{{ contact.headeremail }}</a>
          <a class="text text__big--black" href="tel:+4733378901">{{ contact.headertel }}</a>
        </div>
    </div>
  </div>
</template>

<script>
import linkClickRouting from "../../mixins/linkClickRouting";

export default {
  name: 'Headercontact',

  data() {
        return {
            contact: []
        }
    },
    async fetch() {
        const { json: data } = await this.$kirby.find({
            "query": "page('kontakt')",
            "select": {
                "headertram": true,
                "headeremail": true,
                "headertel": true,
                "headeropening": true,
            }
        }, this.$nuxt.context.app.i18n.locale)
        this.contact = data
    },

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
    },
  },
  mounted() {
    // this.$Splitting()
  }
}
</script>

<style lang="scss" scoped>
    @use "Headercontact";
</style>