<template>
  <header>
    <h1>Header</h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: ['title'],
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
  z-index: 1;
}
</style>