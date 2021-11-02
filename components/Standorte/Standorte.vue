<template>
  <div>
    <badger-accordion v-for="element in data" :key="element.id">
        <badger-accordion-item>
            <template slot="header">
                <h3>{{ element.title }}</h3>
                <p>{{ element.contenttext }}</p>
            </template>    
            <template slot="content">
                <div v-html="element.mapframe" />
            </template>  
        </badger-accordion-item>
    </badger-accordion>
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
        this.data = data
    }
}
</script>