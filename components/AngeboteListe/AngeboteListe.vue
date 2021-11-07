<template>
    <div class="wrapper">
        <div v-for="(element, index) in data" :key="element.id">
            <div class="accordion" @click="itemClick(index)">
                <div class="accordion__title">
                    <h3>{{ element.title }} {{ element.id }}</h3>
                    <p class="plus">+</p>
                </div>    
                <div :data-element-id="index" class="accordion__content">
                    <nuxt-img :src="element.images[0].url" />
                    <p class="text__big">{{ element.introtext }}</p>
                    <p>{{ element.contenttext }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AngeboteListe',

    data() {
        return {
            data: []
        }
    },
    async fetch() {
        const { json: data } = await this.$kirby.find({
            "query": "page('angebote').children",
            "select": {
                "title": true,
                "introtext": true,
                "contenttext": true,
                "contentimage": true,
                "images": {
                    "query": "page.files",
                    "select": {
                        "name": true,
                        "url": true
                    }
                }
            }
        }, this.$nuxt.context.app.i18n.locale)
        this.data = data
    },
    methods: {
    itemClick (elementIndex) {
      const infoElement = document.querySelectorAll('[data-element-id="' + elementIndex + '"]')[0]
      if (infoElement.classList.contains('block')) {
        infoElement.style['max-height'] = '0px';
        infoElement.classList.add('hidden')
        infoElement.classList.remove('block')
      } else {
        infoElement.style['max-height'] = '1500px';
        infoElement.classList.add('block')
        infoElement.classList.remove('hidden')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
    @use "AngeboteListe";
</style>