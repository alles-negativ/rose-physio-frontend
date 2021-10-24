<template>
  <h1>{{ content }}</h1>
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    const data = await $axios.$post('http://localhost:8000/api/query',{
      query: "page('" + params.slug + "')"
    }, {
      auth: {
        username: "hello@alles-negativ.ch",
        password: "letmein123"
      }
    })
    console.log(params)
    const content = data.result
    return { 
      content 
    }
  }
}
</script>