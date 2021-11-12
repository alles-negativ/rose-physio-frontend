<template>
    <div class="wrapper">
        <ul v-for="columns in sortedPeople" :key="columns.id" class="container">
            <li v-for="person in columns" :key="person.id" class="content">
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
            people: [],
            numberOfColumns: 0
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
    },

    methods: {
        getScreen: function(){
            if (process.client) {
                if (window.innerWidth < 575) {
                    this.numberOfColumns = 1
                }
                else if(window.innerWidth > 1200 ) {
                    this.numberOfColumns = 3
                }
                else {
                    this.numberOfColumns = 2
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