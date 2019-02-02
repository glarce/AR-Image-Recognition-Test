<template>
  <div id="app">
    <splash v-if="isSplash" @scan="isSplash = false; isScanning = true" />
    <scanner v-if="isScanning" @sendCode="reciveCode" />
    <media v-if="isPlayingMedia" :code="code" :codes="codes" />
  </div>
</template>

<script>
import 'typeface-roboto'

import Splash from './components/Splash.vue'

import Scanner from './components/Scanner.vue'
import Media from './components/Media.vue'

export default {
  name: 'app',
  components: {
    Splash,

    Scanner,
    Media
  },
  data: () => {
    return {
      isSplash: true,
      isScanning: false,
      isPlayingMedia: false,

      codes: {},
      code: ''
    }
  },
  methods: {
    parseCodes: function (codes) {
      this.codes = codes.data
    },
    reciveCode: function (code) {
      this.code = code
      this.isPlayingMedia = true
      this.isScanning = false
    }
  },
  mounted: function () {
    this.axios.get('codes.json').then(this.parseCodes)
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
