<template>
    <div class="wrapper">
        <magic-grid max-cols="2" max-col-width="650" col-gap="30" wrapper="article-grid">
            <div class="container" v-for="article in articles" :key="article.id">
                <div class="content">
                    <img :src="article.images[0].url">
                    <h3>{{ article.title }}</h3>
                    <p class="text__big">{{ $moment(article.date).format("DD.MM.YYYY") }}</p>
                    <p>{{ article.contenttext }}</p>
                </div>
            </div>  
        </magic-grid>
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
    methods: {
        async getArticles() {
            const options = {
                method: 'POST',
                url: 'http://localhost:8888/rose-physio-backend/api/query',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Language': 'de',
                    Authorization: 'Basic aGVsbG9AYWxsZXMtbmVnYXRpdi5jaDpsZXRtZWluMTIz'
                },
                data: {
                    query: "page('home').children",
                    select: {
                        title: true,
                        date: true,
                        contenttext: true,
                        contentimage: true,
                        images: {query: 'page.files', select: {name: true, url: true}}
                    }
                }
            };
            this.$axios.request(options).then((response) => {
                this.articles = response.data.result.data
            }).catch(function (error) {
                console.error(error);
            });
        }
    },
    created() {
        this.getArticles()
    },
}
</script>

<style lang="scss" scoped>
    @use "Articles";
</style>