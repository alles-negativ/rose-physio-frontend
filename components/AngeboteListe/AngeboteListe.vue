<template>
    <div class="wrapper">
        <div v-for="element in data" :key="element.id">
            <Accordion>
             <template v-slot:title>
                <h3 class="title"> {{ element.title }} </h3>
              </template>
              <template v-slot:body>
                <p class="text" slot="contenttext"> {{ element.contenttext }} </p>
                <div class="image" slot="image"><nuxt-img :src="element.images[0].url" /></div>
                <p class="text__big" slot="introtext"></p>
              </template>
          </Accordion>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AngeboteListe',

    data() {
        return {
            data: [],
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
}
</script>

<style lang="scss">
    @use "AngeboteListe";
</style>