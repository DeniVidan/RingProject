<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-2">
        
      </div>
      <div class="col-md-6">
        <AddImage/>
        <ImageCard style="width: 100%" />
        <ImageCard style="width: 100%" />
        <ImageCard style="width: 100%" />
        <ImageCard style="width: 100%" />
      </div>
      <div class="col-md-4">
        <div class="wrap">
          <div class="title">Liked posts</div>
          
          <div class="content">
            <div class="liked_images">
              <img class="liked_image" src="@/assets/prsten_proba.png" alt="" />
              <img
                class="liked_image"
                src="@/assets/prsten_proba.png"
                alt=""
                width="60px"
              />
              <img
                class="liked_image"
                src="@/assets/prsten_proba.png"
                alt=""
                width="60px"
              />
              <img
                class="liked_image"
                src="@/assets/prsten_proba.png"
                alt=""
                width="60px"
              />
              <img
                class="liked_image"
                src="@/assets/prsten_proba.png"
                alt=""
                width="60px"
              />
              <img
                class="liked_image"
                src="@/assets/prsten_proba.png"
                alt=""
                width="60px"
              />
              <img
                class="liked_image"
                src="@/assets/prsten_proba.png"
                alt=""
                width="60px"
              />
              <img
                class="liked_image"
                src="@/assets/prsten_proba.png"
                alt=""
                width="60px"
              />
              <img
                class="liked_image"
                src="@/assets/prsten_proba.png"
                alt=""
                width="60px"
              />
              <img
                class="liked_image"
                src="@/assets/prsten_proba.png"
                alt=""
                width="60px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="fixed-bottom">
      <input type="file" id="img" name="img" accept="image/*" hidden="hidden" />
      <div class="row1">
        <div class="col-sm-6" style="display: flex; justify-content: flex-start;">
          <button type="button" class="custom_button">
            <span class="material-icons" style="padding-left: 20px;">
              add_photo_alternate
            </span>
          </button>
        </div>

        <div class="col-sm-6" style="display: flex; justify-content: flex-end;">
          <button type="button" class="custom_button">
            <span class="material-icons" style="padding-right: 20px;"> favorite </span>
          </button>
        </div>
      </div>
    </footer>
  </div>
</template>


<script scoped>
// @ is an alias to /src
import ImageCard from "@/components/ImageCard.vue";
import AddImage from "@/components/AddImage.vue";

export default {
  name: "Gallery",
  data(){
      return {
          myText: ''
      }
  },
  methods: {
      close(){
          this.$emit('close');
      },
  },
  components: {
    ImageCard,
    AddImage
  },
};
</script>


<style scoped>
html,
body {
  margin: 0;
  height: 100vh;
}
.container-fluid {
  justify-content: center;
  overflow: hidden;
  background-color: beige;
}
.row {
  margin: 0px 250px;
  transition: all 0.1s ease-in-out;
}
.row1 {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.liked_images {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.liked_image {
  width: 60px;
  margin-top: 10px;
  margin-left: 7.5px;
  margin-right: 7.5px;
  border: 1px solid beige;
}
.title {
  font-size: 21px;
  padding: 10px 0px;
}
.content {
  padding: 10px 0px;
  border-top: 1px solid #f6c0c7;
}
.wrap {
}

.custom_button {
  padding: 0px 8px 0px 8px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
.custom_button:hover {
}


.material-icons {
  color: goldenrod;
  font-size: 40px;
  vertical-align: middle;
  transition: all 0.1s ease-in-out;
}
.material-icons:hover {
 color: #5a9bc5;
}

.custom_text {
}
.fa-plus:before {
  vertical-align: middle;
}
footer {
  color: white;
  display: none;
  background-color: #31312c;
  height: 64px;
}

@media screen and (max-width: 1400px) {
  .row {
    margin: 0px 100px;
  }
}
@media screen and (max-width: 991px) {
  .row {
    margin: 0px 0px;
  }
}
@media screen and (max-width: 767px) {
  /* invisible footer appear */
  footer {
    padding: 10px 0px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .wrap {
    display: none;
  }
  .col-md-6 {
    padding: 0px;
  }
}
@media screen and (max-width: 576px) {
 .row1[data-v-0de3d508]{
     justify-content: space-between !important;
 }
}
</style>





