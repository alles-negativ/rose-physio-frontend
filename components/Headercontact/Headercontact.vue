<template>
  <div class="header">
    <div class="header__links">
      <nuxt-link :to="localePath('/')">
        <img class="header__links--logo" src="/logo_c.svg" alt="">
      </nuxt-link>
      <div class="header__links--utility">
        <p class="text__menu">{{ contact.title }}</p>
        <LanguageInput />
      </div>  
    </div>
    <div class="content__wrapper">
      <div class="header__content">
          <span>{{ contact.headertitle }}</span>
          <div class="text__big" v-html="contact.headertext"></div>
          <div class="header__content--text">
            <p class="text" v-html="contact.headertram"/>
            <p class="text" v-html="contact.headeropening"/>
          </div> 
          <div class="header__content--contact">
            <div class="linkwrapper">
              <a class="text text__big--white" :href="'mailto:' + contact.headeremail">{{ contact.headeremail }}</a>
            </div>
            <div class="linkwrapper">
              <a class="text text__big--white" :href="'tel:' + contact.headertel.replace(/\s+/g, '')">{{ contact.headertel }}</a>
            </div>
          </div>
      </div>
    </div>
      <div class="arrow">
          <img class="arrow__img" src="~/assets/images/arrow.svg" alt="arrow" onclick="arrowScroll()">
      </div>
  </div>
</template>

<script>
import linkClickRouting from "../../mixins/linkClickRouting";

export default {
  name: 'Headercontact',

  mixins: [linkClickRouting],

  data() {
        return {
            contact: []
        }
    },
    async fetch() {
        const { json: data } = await this.$kirby.find({
            "query": "page('kontakt')",
            "select": {
                "title": true,
                "headertitle": true,
                "headertext": true,
                "headertram": true,
                "headeremail": true,
                "headertel": true,
                "headeropening": true,
            }
        }, this.$nuxt.context.app.i18n.locale)
        this.contact = data
    },
}
</script>

<style lang="scss" scoped>
    @use "Headercontact";
</style>