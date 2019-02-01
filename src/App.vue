<template>
  <div id="app">
    <splash v-if="isSplash" @scan="isSplash = false; isScanning = true" />
    <scanner v-if="isScanning" @code="checkCode" /></div>
</template>

<script>
import 'typeface-roboto'

import Splash from './components/Splash.vue'

import Scanner from './components/Scanner.vue'

export default {
  name: 'app',
  components: {
    Splash,

    Scanner
  },
  data: () => {
    return {
      isSplash: true,
      isScanning: false
    }
  },
  methods: {
    checkCode: function (value) {
      alert(value)
    }
  }
}
</script>

<style lang="scss">
$material-icons-font-path: '~material-icons/iconfont/';
@import '~material-icons/iconfont/material-icons.scss';

body {
  margin: 0;
  overflow: hidden;
}

#app {
  font-family: 'roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
}
</style>
