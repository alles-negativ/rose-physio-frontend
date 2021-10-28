<template>
  <main>
    <div class="grid">
      <h1>{{ content.title }}</h1>
      <p class="text__big">{{ content }}</p>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    const data = await $axios.$post('http://localhost:8000/api/query',{
      query: "page('angebote')"
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
