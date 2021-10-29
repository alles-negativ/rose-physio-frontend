<template>
    <div class="grid">
        <div v-for="article in articles" :key="article.id">
            <div class="container" >
                <div class="content">
                    <img :src="article.images[0].url">
                    <h3>{{ article.title }}</h3>
                    <p class="text__big">{{ $moment(article.date).format("DD.MM.YYYY") }}</p>
                    <p>{{ article.contenttext }}</p>
                </div>
            </div>
        </div>  
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
                url: 'http://localhost:8000/api/query',
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