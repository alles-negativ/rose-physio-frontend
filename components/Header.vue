<template>
  <header>
    <h1>{{ title }}</h1>
      <li>
        <LanguageInput />
      </li>
  </header>
</template>

<script>
export default {
  name: 'Header',

  computed: {
    title() {
      return this.$store.getters['header/getTitle']
    }
  }
}
</script>

<style>
header {
  padding: 10vh 0;
  text-align: center;
  background:red;
}
header h1 {
  position: relative;
  margin-bottom: 1rem;
  font-weight: 900;
  font-size: calc(1vw + 2rem);
}
</style>