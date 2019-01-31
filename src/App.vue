<template>
  <div id="app"><scanner /></div>
</template>

<script>
import Scanner from './components/Scanner.vue'

export default {
  name: 'app',
  components: {
    Scanner
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  overflow: hidden;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
}
</style>
