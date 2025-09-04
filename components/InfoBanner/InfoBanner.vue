<template>
  <div class="info__banner">
    <div class="scrolling__container">
      <div class="scrolling__text" :data-text="bannerText">
        {{ bannerText }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'InfoBanner',

    data() {
        return {
            bannerText: '',
            bannerTexts: {
                de: 'Wir ziehen um. 🎉 Ab dem 29. September sind wir neu an der Beethovenstrasse 24 zu finden.',
                en: 'We are moving. 🎉 From September 29th, you can find us at the new location on Beethovenstrasse 24.'
            }
        }
    },

    mounted() {
        this.updateBannerText();
    },

    watch: {
        '$i18n.locale': {
            handler() {
                this.updateBannerText();
            },
            immediate: true
        }
    },

    methods: {
        updateBannerText() {
            const locale = this.$i18n?.locale || 'de';
            this.bannerText = this.bannerTexts[locale] || this.bannerTexts.de;
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
  @use "InfoBanner";
</style>