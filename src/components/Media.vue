<template>
<div class="media">
  <div class="container">
    <img v-if="isImg" :src="imgSrc">

    <video v-if="isVid" controls>
      <source :src="vidSrc" type="video/mp4">
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
    isVid: false,
    vidSrc: '',

    isImg: false,
    imgSrc: ''
  }),
  mounted: function() {

  }
}
</script>

<style lang="css" scoped>
</style>
