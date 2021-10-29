<template>
  <div>
    <Accordion v-for="element in data" :key="element.id">
          <template v-slot:title>
            <span
             style="color: white"
              ><h3>{{ element.title }}</h3>
            <p>{{ element.contenttext }}</p></span
            >
          </template>
          <template v-slot:content>
            <span style="color: white">
              <HtmlContent :html="element.mapframe" />
            </span>
          </template>
    </Accordion>
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