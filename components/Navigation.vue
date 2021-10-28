<template>
    <nav>
        <ul>
            <li v-for="element in menu_elements">
                <nuxt-link :to="localePath('/' + element.slug)">
                    {{ element.title }}
                </nuxt-link>
            </li>
            <li>
                <LanguageInput />
            </li>
        </ul>
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
                if (this.links[i].isHomePage) {
                    let home = this.links[i]
                    home.slug = ""
                    elements.push(home)
                } else if (this.links[i].status == "listed") {
                    elements.push(this.links[i])
                }
            }
            return elements
        }
    }
}
</script>
  
<style>
nav {
  text-align: center;
  background:black;
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

nav li {
  float: left;
}

nav li a {
  display: block;
  padding: 8px;
  text-decoration: none;
  color: white;
}

nav li a.nuxt-link-exact-active {
  color: red;
}
</style>