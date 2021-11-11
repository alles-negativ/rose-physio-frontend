<template>
    <div class="wrapper">
        <!-- <div v-for="(element, index) in data" :key="element.id">
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
        </div> -->
        <div v-for="element in data" :key="element.id">
            <Accordion>
              <h3 slot="title"> {{ element.title }} </h3>
              <p class="text__big" slot="introtext"> {{ element.introtext }} </p>
              <p class="text" slot="contenttext"> {{ element.contenttext }} </p>
              <div class="image" slot="image"><nuxt-img :src="element.images[0].url" /></div>
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

<style lang="scss" scoped>
    @use "AngeboteListe";
</style>