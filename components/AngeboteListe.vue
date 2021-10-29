<template>
    <div>
        <div v-for="element in data" :key="element.id">
            <img :src="element.images[0].url">
            <h3>{{ element.title }}</h3>
            <p style="color: grey;">{{ element.introtext }}</p>
            <p>{{ element.contenttext }}</p>
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
        this.data = data.data
    }
}
</script>