<template>
    <div class="wrapper"> 
        <ul class="container">
            <li v-for="article in articles" :key="article.id" class="content">
                <nuxt-img :src="article.images[0].url" />
                <h3>{{ article.title }}</h3>
                <p class="text__big">{{ $moment(article.date).format("DD.MM.YYYY") }}</p>
                <p>{{ article.contenttext }}</p>
            </li>
        </ul>  
    </div>
</template>

<script>
export default {
    name: 'Articles',

    data() {
        return {
            articles: []
        }
    },
    async fetch() {
        const { json: data } = await this.$kirby.find({
            "query": "page('home').children",
            "select": {
                "title": true,
                "date": true,
                "contenttext": true,
                "contentimage": true,
                "images": {
                    "query": 'page.files',
                    "select": {
                        "name": true,
                        "url": true
                    }
                }
            }
        }, this.$nuxt.context.app.i18n.locale)
        this.articles = data
    }
}
</script>

<style lang="scss" scoped>
    @use "Articles";
</style>