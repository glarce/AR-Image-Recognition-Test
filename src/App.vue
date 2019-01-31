<template>
  <div id="app"><scanner @code="checkCode" /></div>
</template>

<script>
import Scanner from './components/Scanner.vue'

export default {
  name: 'app',
  components: {
    Scanner
  },
  methods: {
    checkCode: function (value) {
      alert(value)
    }
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
