<template>
    <nav>
        <ul>
            <li v-for="link in links">
                <nuxt-link :to="'/' + link" v-if="link != 'error' & link != 'home'">
                    {{ link }}
                </nuxt-link>
                <nuxt-link to="/" v-else-if="link != 'error'">
                    {{ link }}
                </nuxt-link>
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
                query: "site.children"
            }, {
                auth: {
                    username: "hello@alles-negativ.ch",
                    password: "letmein123"
                }
            })
            this.links = data.result
        }
    },
    created() {
        this.getLinks()
    },
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