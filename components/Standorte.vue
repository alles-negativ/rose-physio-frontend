<template>
    <div>
        <div v-for="element in data" :key="element.id">
            <h3>{{ element.title }}</h3>
            <p>{{ element.contenttext }}</p>
            {{ element.mapframe }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'Standorte',

    data() {
        return {
            data: []
        }
    },
    async fetch() {
        const { json: data } = await this.$kirby.find({
           	"query": "page('kontakt').children",
            "select": {
                "title": true,
                "contenttext": true,
                "mapframe": true
            }
        }, this.$nuxt.context.app.i18n.locale)
        this.data = data.data
    }
}
</script>