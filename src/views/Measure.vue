<template>
  <div class="flex-container">
    <div class="header">
      <div :class="{active: !find}" v-if="measure" @click="onClickMeasure()" class="woman"><h1>Measure your finger</h1></div>
      <div :class="{active2: !measure}" v-if="find" @click="onClickFind()" class="man"><h1>Find ring size</h1></div>
    </div>
    <div class="content">
        <MeasureFinger v-if=" !find"/>
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

.flex-container {
  margin: 0;
  padding: 0px;
  box-sizing: border-box;
}
.header {
  padding: 0px 0px;
}
h1 {
  font-family: "Dancing Script", cursive;
  margin: 0px 0px;
}
.active{
    width: 100% !important;
    background: #f9c0c7a8 !important;
}
.active:hover{
    background: #f9c0c759 !important;
}
.active2{
    width: 100% !important;
    background: #b5faf4 !important;
}
.active2:hover{
    background: #b5faf47b !important;
}
.woman{
    width: 50%;
    display:inline-block;
    background: #f9c0c759;
    padding: 20px 0px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
}
.woman:hover{
    background: #f9c0c7a8;
}

.man{
    width: 50%;
    display: inline-block;
    background: #b5faf47b; 
    padding: 20px 0px;
    transition: all 0.3s ease-in-out !important;
    cursor: pointer;
}
.man:hover{
    background: #b5faf4;
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