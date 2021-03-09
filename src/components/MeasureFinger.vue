<template>
  <div class="flex-container">
      <img class="image" src="" alt="">
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
  margin: 0px 0px !important;
  min-height: 100vh;
  min-width: 100%;

}
.image{
  margin: 0 !important;
  background-image: url("https://www.teahub.io/photos/full/28-280182_wiki-full-hd-pc-photos-free-download-pic.jpg");
  background-attachment: fixed;
  min-height: 100vh;
  min-width: 100%;
  opacity: 50%;
  z-index: -1;
}

.a {
  margin-top: -170px;
  height: 100px;
  width: 100px;
  background: red;

}
</style>
