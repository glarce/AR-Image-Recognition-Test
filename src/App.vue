<template>
<div id="app">
  <splash v-if="isSplash" @scan="
        isSplash = false;
        isScanning = true;
      " />
  <scanner v-if="isScanning" @sendCode="reciveCode" />
  <media v-if="isPlayingMedia" :code="code" :codes="codes" @splash="isPlayingMedia = false;isSplash = true" />
</div>
</template>

<script>
import 'typeface-roboto'

import Splash from './components/Splash.vue'

import Scanner from './components/Scanner.vue'
import Media from './components/Media.vue'

export default
{
  name: 'app',
  components:
  {
    Splash,

    Scanner,
    Media
  },
  data: () =>
  {
    return {
      isSplash: true,
      isScanning: false,
      isPlayingMedia: false,

      codes:
      {},
      code: ''
    }
  },
  methods:
  {
    getURLParam: function(sParam)
    {
      var sPageURL = window.location.search.substring(1)
      var sURLVariables = sPageURL.split('&')
      for (var i = 0; i < sURLVariables.length; i++)
      {
        var sParameterName = sURLVariables[i].split('=')
        if (sParameterName[0] == sParam)
        {
          return decodeURIComponent(sParameterName[1])
        }
      }
    },
    parseCodes: function(codes)
    {
      this.codes = codes.data

      if (this.getURLParam(this.codes.urlParam) != undefined)
      {
        this.reciveCode(this.getURLParam(this.codes.urlParam))
      }
    },
    reciveCode: function(code)
    {
      this.code = code
      this.isScanning = false
      this.isSplash = false
      this.isPlayingMedia = true
    }
  },
  mounted: function()
  {
    this.axios.get('codes.json').then(this.parseCodes)
  }
}
</script>

<style lang="scss">
$material-icons-font-path: "~material-icons/iconfont/";
@import "~material-icons/iconfont/material-icons.scss";

body {
    margin: 0;
    overflow: hidden;
}

#app {
    font-family: "roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin: 0;
}
</style>
