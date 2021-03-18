<template>
<!--   <div class="container-flex">

    <div class="content">
        <div class="row" style="margin-top: 170px;">
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
  </div>  -->

  <carousel :touchDrag="true" :per-page="1" class="content" style="width: 70%">
  <slide>
    <img src="https://i.pinimg.com/originals/8e/61/ff/8e61ff28302b6fef1057d1b5afb52d3f.png" alt="">
  </slide>
  <slide>
    <img src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Reversed_Earth_map_1000x500.jpg" alt="">
  </slide>
    <slide>
    <img src="https://i.pinimg.com/originals/8e/61/ff/8e61ff28302b6fef1057d1b5afb52d3f.png" alt="">
  </slide>
   <slide>
    <img src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Reversed_Earth_map_1000x500.jpg" alt="">
  </slide>
</carousel>


  
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: "MeasureFinger",
  props: {},
  components: {
    Carousel,
    Slide
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container-flex {
  margin: 0px !important;
  padding: 0px !important;
}

.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
}
.row-img{
 padding: 0px;
}
.row-content{
  align-self: center;
}
@media screen and (max-width: 575px) {
  .row{
    width: 100% !important;
  }
}
</style>



<style> /* not scoped */

.VueCarousel-wrapper{
  border-radius: 20px;
}
.VueCarousel-dot-container[data-v-438fd353]{
  margin-top: -100px !important;
  z-index: 1;
}
@media screen and (max-width: 575px) {
  .VueCarousel-wrapper{
  border-radius: 0px;
  }
  .VueCarousel{
    width: 100% !important;
  }
}
</style>
