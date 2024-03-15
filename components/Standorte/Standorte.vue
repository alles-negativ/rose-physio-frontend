<template>
  <div name="container" class="container">
    <div v-for="element in data" :key="element.id">
        <Accordion>
             <template v-slot:title>
                 <div>
                    <h3 class="title"> {{ element.title }} </h3>
                    <p class="text__big"> {{ element.contenttext }} 
                        <a v-if="element.appointments" :href="element.appointments" @click.self.stop target="_blank">Termin Buchen!</a>
                    </p>
                </div>
              </template>
              <template v-slot:body>
                <div class="content__map" v-html="element.mapframe" />
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
                "appointments": true,
                "mapframe": true
            }
        }, this.$nuxt.context.app.i18n.locale)
        this.data = data
    }
}
</script>

<style lang="scss" scoped>
    @use "Standorte";
</style>