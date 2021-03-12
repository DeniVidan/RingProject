<template>
  <div class="flex-container">
    <div class="header">
      <div :class="{active: !find}" v-if="measure" @click="onClickMeasure()" class="woman"><h1>Measure your finger</h1></div>
      <div :class="{active2: !measure}" v-if="find" @click="onClickFind()" class="man"><h1>Find ring size</h1></div>
    </div>
    <div class="content">
        <MeasureFinger v-if=" !find"/>
        <img class="bg-img" src="" alt="">
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import MeasureFinger from "@/components/MeasureFinger.vue";


export default {
  name: "Measure",
  components: {
      MeasureFinger
  },
  data(){
      return {
          measure : true,
          find : true
      }
  },
  methods: {
      onClickMeasure (){
        this.measure = true;
        this.find = false;
      },
      onClickFind (){
        this.find = true;
        this.measure = false;
      }
  }
};
/* var $ = require('jquery') */
 
</script>


<style scoped>
.pick{
  z-index: 2 !important;
}
.bg-img{
  position: fixed;
  top: 198px !important;
  left: 0 !important;
  background: url("https://wallpapercave.com/wp/wp2570965.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  min-width: 100%;
  min-height: 100vh;
  opacity: 0.5;
  z-index: -1;
}
.flex-container {
  margin: 0;
  padding: 0px;
  box-sizing: border-box;

}
.header {
  width: 100%;
  position: fixed;
  padding: 0px 0px;
  z-index: 2;
}
h1 {
  font-family: "Dancing Script", cursive;
  margin: 0px 0px;
}
.content{
  min-height: 100vh;

}
.active{
    width: 100% !important;
    background: #e0808b !important;
}
.active:hover{
    background: #f9c0c7 !important;
}
.active2{
    width: 100% !important;
    background: #76e0d7 !important;
}
.active2:hover{
    background: #b5faf4 !important;
}
.woman{
    width: 50%;
    display:inline-block;
    background: #f9c0c7;
    padding: 20px 0px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
}
.woman:hover{
    background: #e0808b;
}

.man{
    width: 50%;
    display: inline-block;
    background: #b5faf4; 
    padding: 20px 0px;
    transition: all 0.3s ease-in-out !important;
    cursor: pointer;
}
.man:hover{
    background: #76e0d7;
}


@media screen and (max-width: 576px) {
    .woman{
        width: 100%;
    }
    .man{
        width: 100%;
    }
}
</style>