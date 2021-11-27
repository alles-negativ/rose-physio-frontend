<template>
    <div class="container">
        <ul v-for="columns in sortedPeople" :key="columns.id" class="container__columns">
            <li v-for="person in columns" :key="person.id" class="content">
                <nuxt-img :src="person.images[0].url" :alt="person.images[0].alt" />
                <h3>{{ person.title }}</h3>
                <div class="text__big" v-html="person.introtext"></div>
                <div class="text" v-html="person.contenttext"></div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'People',

    data() {
        return {
            people: [],
            numberOfColumns: 1
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
                        "url": true,
                        "alt": true
                    }
                }
            }
        }, this.$nuxt.context.app.i18n.locale)
        this.people = data
    },

    methods: {
        getScreen: function(){
            if (process.client) {
                if (window.innerWidth < 575) {
                    this.numberOfColumns = 1
                }
                else if(window.innerWidth > 1200 ) {
                    this.numberOfColumns = 2
                }
                else {
                    this.numberOfColumns = 1
                }
           } 
        }
    },

    computed: {
        sortedPeople(){
            var output = []
            for (var i=0; i<this.numberOfColumns; i++) {
                output[i] = []
                for (var j=i; j<this.people.length; j=j+this.numberOfColumns) {
                    output[i].push(this.people[j]) 
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
    @use "People";
</style>