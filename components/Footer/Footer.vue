<template>
  <footer>
    <div class="container">
      <div class="container__top">
        <div class="contact">
          <p class="text__small">
            <a :href="'mailto:' + footer.headeremail">{{ footer.headeremail }}</a>
          </p>
          <p class="text__small">
            <a :href="'tel:' + footer.headertel.replace(/\s+/g, '')">{{ footer.headertel }}</a>
          </p>
          <p class="text__small" id="heading" >{{ $t('open') }}</p>
          <p class="text__small" v-html="footer.headeropening" />
        </div>
        <div class="legal">
          <nuxt-link :to="localePath('/' + 'kontakt#impressum')">
            <p class="text__small">Impressum</p>
          </nuxt-link>
        </div>
      <div class="standorte">
        <p class="text__footer">{{ $t('locations') }}</p>
        <div v-for="location in locations" :key="location.id">
          <p class="standorte__item">{{ location.contenttext }}</p>
        </div>
      </div>
      </div>
        <div class="parking_lot">
          <div class="parking_space"></div>
        </div>    
    </div>
  </footer>
</template>

<script>
export default {
    name: 'Footer',

    data() {
        return {
            footer: [],
            locations: []
        }
    },
    async fetch() {
        const { json: data } = await this.$kirby.find({
            "query": "page('kontakt')",
            "select": {
                "headeremail": true,
                "headertel": true,
                "headeropening": true,
            }
        }, this.$nuxt.context.app.i18n.locale)
        this.footer = data

        const { json: datalocations } = await this.$kirby.find({
            "query": "page('kontakt').children",
            "select": {
                "contenttext": true,
            }
        }, this.$nuxt.context.app.i18n.locale)
        this.locations = datalocations
    }
}
</script>

<style lang="scss" scoped>
  @use "Footer";
</style>