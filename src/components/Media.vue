<template>
<div class="media">
  <div class="container">
    <video autoplay>
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
  mounted: function () {
    for (var i = 0; i < this.codes.codes.length; i++) {
      const codeJSON = this.codes.codes[i]

      if (codeJSON.code == this.code) {
        this.vidSrc = codeJSON.src
        this.vidType = codeJSON.type
      } else if (this.codes.prefix + codeJSON.code == this.code) {
        this.vidSrc = codeJSON.src
        this.vidType = codeJSON.type
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
