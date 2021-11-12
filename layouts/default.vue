<template>
  <div>
    <CookieBox />
    <Header :key="key" />
    <Navigation />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      key: 0,
    };
  },
  watch: {
      $route() {
        this.forceRerender()
      }
  },
  methods: {
    forceRerender() {
      this.key += 1;
    }
  }
}
</script>
