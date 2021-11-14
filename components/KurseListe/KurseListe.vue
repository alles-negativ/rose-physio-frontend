<template>
    <div class="wrapper">
        <div v-for="element in data" :key="element.id">
            <Accordion>
             <template v-slot:title>
                <h3 class="title"> {{ element.title }} </h3>
              </template>
              <template v-slot:body>
                <p class="text" slot="contenttext"> {{ element.introtext }} </p>
              </template>
          </Accordion>
        </div>
    </div>
</template>

<script>
export default {
    name: 'KurseListe',

    data() {
        return {
            data: [],
        }
    },
    async fetch() {
        const { json: data } = await this.$kirby.find({
            "query": "page('kurse').children",
            "select": {
                "title": true,
                "introtext": true,
            }
        }, this.$nuxt.context.app.i18n.locale)
        this.data = data
    },
}
</script>

<style lang="scss" scoped>
    @use "KurseListe";
</style>