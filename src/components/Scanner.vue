<template>
  <div class="scanner">
    <div class="container"><video id="preview" class="video-back" playsinline></video></div>
  </div>
</template>

<script>
export default {
  name: 'scanner',
  data: () => {
    return {
      codes: [],
      scanner: null
    }
  },
  methods: {
    startScanner: function (cameras) {
      if (cameras.length > 0) {
        this.scanner.start(cameras[0])
      } else {
        alert('No cameras found.')
      }
    },
    scan: function (contents) {
      this.$emit('code', contents)
    },
    error: function (e) {
      alert(e)
    }
  },
  mounted: function () {
    this.scanner = new Instascan.Scanner({
      video: document.getElementById('preview')
    })
    this.scanner.addListener('scan', this.scan)
    Instascan.Camera.getCameras()
      .then(this.startScanner)
      .catch(this.error)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: linear-gradient(45deg, #434343 0%, black 100%);

  video {
    max-width: 100vw;
    max-height: 100vh;
  }
}
</style>
