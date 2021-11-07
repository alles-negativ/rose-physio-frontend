<template>
    <div class="wrapper">
        <ul class="container">
            <li v-for="person in people" :key="person.id" class="content">
                <nuxt-img :src="person.images[0].url" />
                <h3>{{ person.title }}</h3>
                <p class="text__big">{{ person.introtext }}</p>
                <p>{{ person.contenttext }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'People',

    data() {
        return {
            people: []
        }
    },
    async fetch() {
        const { json: data } = await this.$kirby.find({
            "query": "page('team').children",
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
        this.people = data
    }
}
</script>

<style lang="scss" scoped>
    @use "People";
</style>