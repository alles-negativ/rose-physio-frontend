<template>
    <nav>
        <div class="nav">
            <ul>
                <li>
                    <nuxt-link class="image image__home" :to="localePath('/')">
                        <a class="image image_link" href=""></a>
                    </nuxt-link>
                </li>
                <li class="item" v-for="element in menu_elements" :key="element.id">
                    <nuxt-link :to="localePath('/' + element.slug)">
                        <p class="text__menu">{{ element.title }}</p>
                    </nuxt-link>
                </li>
                <li class="image image__phone" v-if="$device.isMobileOrTablet">
                    <a class="image image_link" href=""></a>
                </li>
                <li class="image image__mail" v-if="$device.isDesktop">
                    <a class="image image_link" href=""></a>
                </li>
            </ul>
        </div>    
    </nav>
</template>

<script>
export default {
    name: 'Navigation',

    data() {
        return {
            links: []
        }
    },
    methods: {
        async getLinks() {
            const data = await this.$axios.$post('http://localhost:8000/api/query',{
            "query": "site.children",
            "select": {
                "title": true,
                "slug": true,
                "isHomePage": true,
                "isErrorPage": true,
                "status": true
            }
            }, {
                auth: {
                    username: "hello@alles-negativ.ch",
                    password: "letmein123"
                }
            })
            this.links = data.result.data
        }
    },
    created() {
        this.getLinks()
    },
    computed: {
        menu_elements: function() {
            let elements = []
            for (let i = 0; i < this.links.length; i++) {
                // if (this.links[i].isHomePage) {
                //     let home = this.links[i]
                //     home.slug = ""
                //     elements.push(home)
                // }
                if (this.links[i].status == "listed" && !this.links[i].isHomePage) {
                    elements.push(this.links[i])
                }
            }
            return elements
        }
    }
}
</script>
  
<style lang="scss" scoped>
    @use "Navigation";
</style>