<template>
  <p>{{ page }}</p>
</template>

<script>
export default {
  name: 'Slug',
  async asyncData({ app, params, $kirby }) {
    // const data = await $axios.$post('http://localhost:8000/api/query',{
    //   query: "page('" + params.slug + "')"
    // }, {
    //   auth: {
    //     username: "hello@alles-negativ.ch",
    //     password: "letmein123"
    //   }
    // })
    // console.log(params)
    // const content = data.result
    // return { 
    //   content 
    // }
    const { json: page } = await $kirby.find({
      "query": "page('" + params.slug + "')"
    }, app.i18n.locale)
    return { page }
  }
}
</script>