<template>
  <footer>
    <div class="container">
      <div class="container__top">
        <div class="contact">
          <p class="text__small">{{ footer.headeremail }}</p>
          <p class="text__small">{{ footer.headertel }}</p>
          <p class="text__small">Öffnungszeiten <br>{{ footer.headeropening }}</p>
        </div>
        <div class="legal">
          <nuxt-link :to="localePath('/' + 'kontakt#impressum')">
            <p class="text__small">Impressum</p>
          </nuxt-link>
        </div>
      <div class="standorte">
        <p class="text__footer">Standorte</p>
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