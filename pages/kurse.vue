<template>
  <main>
    <h1>{{ content.title }}</h1>
    <p>{{ content }}</p>
  </main>
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    const data = await $axios.$post('http://localhost:8888/rose-physio-backend/api/query',{
      query: "page('kurse')"
    }, {
      auth: {
        username: "hello@alles-negativ.ch",
        password: "letmein123"
      }
    })
    const content = data.result
    return { 
      content 
    }
  }
}
</script>