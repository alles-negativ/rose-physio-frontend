<template>
  <div>
    <div v-for="element in data" :key="element.id">
        <Accordion>
             <template v-slot:title>
                <h3 class="title"> {{ element.title }} </h3>
              </template>
              <template v-slot:body>
                <div v-html="element.mapframe" />
              </template>
        </Accordion>
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
        this.data = data
    }
}
</script>