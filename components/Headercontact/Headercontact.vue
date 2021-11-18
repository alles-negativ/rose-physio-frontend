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
    <div class="content__wrapper">
      <div class="header__content">
          <span v-html="title" />
          <p class="text__big">{{ text }}</p>
          <div class="header__content--text">
            <p class="text" v-html="contact.headertram"/>
            <p class="text">{{ contact.headeropening }}</p>
          </div> 
          <div class="header__content--contact">
            <div class="linkwrapper">
              <a class="text text__big--white" href="mailto:info@rose-physio-fake.ch?subject=Termin&body=Guten%20Tag%2C%0A%0Aich%20w%C3%BCrde%20gerne%20einen%20Termin%20abmachen.%0A%0AGruss">{{ contact.headeremail }}</a>
            </div>
            <div class="linkwrapper">
              <a class="text text__big--white" href="tel:+4733378901">{{ contact.headertel }}</a>
            </div>
          </div>
      </div>
    </div>
      <div class="arrow" onclick="arrowScroll()">
          <img class="arrow__img" src="~/assets/images/arrow.svg" alt="">
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