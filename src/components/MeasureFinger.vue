<template>
  <div class="flex-container">
    <div class="a"></div>
    <div class="a"></div>
    <div class="a"></div>
    <div class="a"></div>
    <div class="a"></div>
    <div class="a"></div>
    <div class="a"></div>
    <div class="a"></div>
    <div class="a"></div>
    <div class="a"></div>
    <div class="a"></div>
  </div>
</template>

<script>
export default {
  name: "MeasureFinger",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.flex-container {
  position: fixed;
  margin: 0px 0px !important;
  background-image: url("https://www.teahub.io/photos/full/28-280182_wiki-full-hd-pc-photos-free-download-pic.jpg");
  min-height: 100vh;
  min-width: 200vh;
  opacity: 50%;
}
.a {
  margin-top: 50px;
  height: 100px;
  width: 100px;
  background: red;
  z-index: 1;
}
</style>
