<template>
  <div class="outer-container">
    <div class="container">
      <h1>QR to Video</h1>

      <md-button class="md-raised md-primary" @click="$emit('scan')">scan</md-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'splash'
}
</script>

<style lang="scss" scoped>
  .outer-container {
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    .container {
      text-align: center;
    }
  }
</style>
