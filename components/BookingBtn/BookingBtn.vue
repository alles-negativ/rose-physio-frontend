<template>
  <div>
    <div @click="togglePopup">
      <div class="switch text__menu">
          <p>{{ $t('appointment') }}</p>
      </div>
    </div>
    <div class="popup" id="popup">
        <h4>{{ $t('choose') }}</h4>
      <div class="text__menu" v-for="element in data" :key="element.id">
          <div class="popup-link--container" v-if="element.appointments">
            <p class="popup-arrow">></p>
            <a class="popup-link" :href="element.appointments" target="_blank">{{ element.title }}</a>
          </div>
      </div>
    </div>
    <div @click="closePopup" class="bg-close" id="bg-close">
    </div>
  </div>
</template>

<script>
export default {
    name: 'BookingBtn',

    data() {
        return {
            data: [],
        }
    },
    async fetch() {
        const { json: data } = await this.$kirby.find({
            "query": "page('kontakt').children",
            "select": {
                "title": true,
                "appointments": true,
            }
        }, this.$nuxt.context.app.i18n.locale)
        this.data = data
    },
    methods: {
      togglePopup() {
        var popup = document.getElementById("popup")
        var bgClose = document.getElementById("bg-close")
        popup.classList.toggle("open")
        bgClose.classList.toggle("open")
      },
      closePopup() {
        var popup = document.getElementById("popup")
        var bgClose = document.getElementById("bg-close")
        popup.classList.remove("open")
        bgClose.classList.remove("open")
      }
    }
  }
  

</script>

<style lang="scss" scoped>
    @use "BookingBtn";
</style>