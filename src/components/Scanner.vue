<template>
  <div class="scanner">
    <div class="container"><video id="preview"></video></div>

    <ul>
      <li v-for="code in codes">{{ code }}</li>
    </ul>
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
    scan: function (contents) {
      this.codes.push(contents)
    }
  },
  mounted: function () {
    let self = this

    self.scanner = new Instascan.Scanner({
      video: document.getElementById('preview')
    })
    self.scanner.addListener('scan', this.scan)
    Instascan.Camera.getCameras()
      .then(function (cameras) {
        if (cameras.length > 0) {
          self.scanner.start(cameras[0])
        } else {
          console.error('No cameras found.')
        }
      })
      .catch(function (e) {
        alert(e)
      })
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
