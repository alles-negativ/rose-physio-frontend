<template>
    <nav>
        <div class="nav">
            <ul>
                <li>
                    <nuxt-link class="image" :to="localePath('/')">
                        <svg width="13" height="13" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
                            <path class="path" d="M7.25969 1.80083L11.7596 5.76086C12.0077 5.97918 12.1499 6.29369 12.1499 6.62417V11C12.1499 11.6351 11.635 12.15 10.9999 12.15H2C1.36487 12.15 0.85 11.6351 0.85 11V6.62417C0.85 6.29369 0.992177 5.97918 1.24027 5.76086L5.74023 1.80083C6.17459 1.41859 6.82532 1.41859 7.25969 1.80083Z" stroke-width="1.7"/>
                        </svg>
                    </nuxt-link>
                </li>
                <li class="item" v-for="element in menu_elements" :key="element.id">
                    <nuxt-link :to="localePath('/' + element.slug)">
                        <p class="text__menu">{{ element.title }}</p>
                    </nuxt-link>
                </li>
                <li class="image image__phone" v-if="$device.isMobileOrTablet">
                    <a href="tel:+4733378901"></a>
                </li>
                <li class="image image__mail" v-if="$device.isDesktop">
                    <a href="mailto:info@rose-physio-fake.ch?subject=Termin&body=Guten%20Tag%2C%0A%0Aich%20w%C3%BCrde%20gerne%20einen%20Termin%20abmachen.%0A%0AGruss"></a>
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