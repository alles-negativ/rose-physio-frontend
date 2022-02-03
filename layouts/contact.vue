<template>
  <div>
    <CookieBox />
    <Headercontact :key="key" />
    <Navigation />
    <div class="wrapper">
      <Nuxt />
    </div>
    <Footer :key="key" />
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