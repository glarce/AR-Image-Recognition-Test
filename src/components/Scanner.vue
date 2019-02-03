<template>
<div class="scanner">
  <div class="container">
    <video id="preview" class="video-back" playsinline></video>
  </div>
</div>
</template>

<script>
export default
{
  name: 'scanner',
  data: () =>
  {
    return {
      codes: [],
      scanner: null,
      isLoading: true
    }
  },
  methods:
  {
    startScanner: function(cameras)
    {
      if (cameras.length > 0)
      {
        this.scanner.start(cameras[0])
      }
      else
      {
        alert('No camera detected')
      }
    },
    scan: function(contents)
    {
      this.$emit('sendCode', contents)
    },
    error: function(e)
    {
      alert('An error has occurred. Please use safari on Apple products and Chrome on Android and enable camera.')
    }
  },
  mounted: function()
  {
    // Create scanner
    this.scanner = new Instascan.Scanner(
    {
      video: document.getElementById('preview'),
      mirror: false,
      backgroundScan: false,
      scanPeriod: 5
    })

    // Add event listener for 'scan'
    this.scanner.addListener('scan', this.scan)

    // Start scanning
    Instascan.Camera.getCameras()
      .then(this.startScanner)
      .catch(this.error)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

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
