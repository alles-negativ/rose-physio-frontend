<template>
  <main>
    <h1>{{ content.content.headertext }}</h1>
    <div v-if="$device.isDesktop">
      Desktop
    </div>
    <div v-if="$device.isMobile">
      Mobile
    </div>
    <Articles />
  </main>
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    const data_de = await $axios.$post('http://localhost:8000/api/query',{
      query: "page('home')",
    }, {
      auth: {
        username: "hello@alles-negativ.ch",
        password: "letmein123"
      },
      headers: {
        'Content-Type': 'application/json',
        'X-Language': 'de'
      }
    })
    const data_en = await $axios.$post('http://localhost:8000/api/query',{
      query: "page('home')"
    }, {
      auth: {
        username: "hello@alles-negativ.ch",
        password: "letmein123"
      },
      headers: {
        'Content-Type': 'application/json',
        'X-Language': 'en'
      }
    })
    const pre_content = {
      de: data_de.result,
      en: data_en.result
    }
    return { 
      pre_content 
    }
  },
  computed: {
    content: function() {
      if (this.$i18n.locale == "de") { return this.pre_content.de }
      else { return this.pre_content.en }
    }
  }
}
</script>