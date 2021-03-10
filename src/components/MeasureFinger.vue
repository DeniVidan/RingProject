<template>
  <div class="container-flex">
    <img class="bg-img" src="" alt="" />
    <div class="content">
        <div class="row">
          <div class="col-md-6 row-img">
            <img src="@/assets/nogomet slika.jpg" alt=""/>
          </div>
          <div class="col-md-6 row-content">
            <h3>measure correctly for 100% efficiency</h3>

          </div>
        </div>

        <div class="row">
          <div class="col-md-6 row-img">
            <img src="@/assets/nogomet slika.jpg" alt=""/>
          </div>
          <div class="col-md-6" style="align-self: center;">
            <h3>measure correctly for 100% efficiency</h3>

          </div>
        </div>
    </div>
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
#app {
}
.container-flex {
  margin: 0px !important;
  padding: 0px !important;
}

.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 100px;
  z-index: 1;
  overflow: hidden;
}
.row{
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 0px 0px;
  margin-bottom: 40px;
  background-color: rgba(245, 245, 220, 0.638);
  border-radius: 20px;
  width: 70%;
  z-index: 1;
}
img{
  width: 100%;
  border-radius: 20px;
}
.row-img{
 padding: 0px;
}
.row-content{
  align-self: center;
}
</style>
