<template>
    <div class="container"> 
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3251.2269443723594!2d8.533985812469675!3d47.36670187104853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479009ff64a00161%3A0x67e3626ba84d1280!2sBeethovenstrasse%2024%2C%208002%20Z%C3%BCrich!5e1!3m2!1sen!2sch!4v1756994213949!5m2!1sen!2sch" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</template>

<script>
export default {
    name: 'Location',

    data() {
        return {
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
                        "url": true,
                        "alt": true
                    }
                }
            }
        }, this.$nuxt.context.app.i18n.locale)
        this.articles = data
    },

    methods: {
        getScreen: function(){
            if (process.client) {
                if (window.innerWidth < 759.98) {
                    this.numberOfColumns = 1
                }
                else if(window.innerWidth > 1439.98 ) {
                    this.numberOfColumns = 3
                }
                else {
                    this.numberOfColumns = 2
                }
           } 
        }
    },

    computed: {
        sortedArticles(){
            var output = []
            var input = this.articles.sort(function(a,b){
                return new Date(b.date) - new Date(a.date);
            })
            for (var i=0; i<this.numberOfColumns; i++) {
                output[i] = []
                for (var j=i; j<input.length; j=j+this.numberOfColumns) {
                    output[i].push(input[j]) 
                }
            }
            return output
        }
    },

    mounted() {
        this.getScreen()
        window.addEventListener('resize', () => {
        this.getScreen()
    })
  },
}
</script>

<style lang="scss" scoped>
    @use "Location";
</style>