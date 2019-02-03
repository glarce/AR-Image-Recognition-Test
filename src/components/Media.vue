<template>
<div class="media">
  <div class="container">
    <video autoplay controls="true" id="video">
      <source :src="vidSrc" :type="vidType">
    </video>
  </div>
</div>
</template>

<script>
export default
{
  name: 'media',
  props: ['code', 'codes'],
  data: () => (
  {
    vidSrc: '',
    vidType: ''
  }),
  methods:
  {
    getURLParamFromString: function(string, sParam)
    {
      var sPageURL = string.substring(string.indexOf('?') + 1)
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
    done: function()
    {
      this.$emit('splash')
    }
  },
  mounted: function()
  {
    for (var i = 0; i < this.codes.codes.length; i++)
    {
      const codeJSON = this.codes.codes[i]

      if (codeJSON.code === codeJSON.code)
      {
        console.log(true);

        this.vidSrc = codeJSON.src
        this.vidType = codeJSON.type
      }
      else if (this.getURLParamFromString(this.code, this.codes.urlParam) === codeJSON.code)
      {
        this.vidSrc = codeJSON.src
        this.vidType = codeJSON.type
      }
    }

    if (this.vidSrc === '')
    {
      alert('This qr code dosen\'t have a video embeded')

      this.$emit('splash')
    }

    document.getElementById('video').addEventListener('ended', this.done, false);
  }
}
</script>

<style lang="scss" scoped>
.container {
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    video {
        max-width: 100vw;
        max-height: 100vh;
    }
}
</style>
