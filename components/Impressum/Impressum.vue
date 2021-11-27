<template>
    <div id="impressum" class="container"> 
        <h1>Impressum</h1>
        <div class="text" v-html="impressum.impressumtext"></div>
        <h3> {{ $t('contact') }} </h3>
        <div class="text" v-html="impressum.contacttext"></div>
    </div>
</template>

<script>
export default {
    name: 'Impressum',

    data() {
        return {
            impressum: []
        }
    },
    async fetch() {
        const { json: data } = await this.$kirby.find({
            "query": "page('impressum')",
            "select": {
                "title": true,
                "impressumtitle": true,
                "impressumtext": true,
                "contacttitle": true,
                "contacttext": true,
            }
        }, this.$nuxt.context.app.i18n.locale)
        this.impressum = data
    }
}
</script>

<style lang="scss" scoped>
  @use "Impressum";
</style>