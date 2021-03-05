<template>
  <div class="wrap">
    <div class="title">Add picture</div>
    <div class="content">
        <div class="row">

        <input type="file" id="img" name="img" accept="image/*" hidden="hidden" />
        <button type="button" class="custom_button">
            <span class="material-icons" style="color: #31312c">
            add_photo_alternate
            </span>
        </button>
        <span class="custom_text" hidden>No file choosen</span>

        </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "AddImage",
  props: {
  },
};
</script>


<style scoped>
.material-icons {
    padding: 10px 10px;
  font-size: 30px;
  vertical-align: middle;
  transition: all 0.05s;
  color: #31312c;
  background-color: #79797943;
  border-radius: 10px;
}
.material-icons:hover {
  background-color: #7979796b;
}
.custom_button {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  padding: 7px 8px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
.title {
  font-size: 21px;
  padding: 10px 0px;
}
.content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  padding: 10px 0px;
  border-top: 1px solid #f6c0c7;
}



@media screen and (max-width: 767px) {
  /* invisible footer appear */
/*   footer {
    padding: 10px 0px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  } */
  .wrap {
    display: none;
  }
/*   .col-md-6 {
    padding: 0px;
  } */
}
</style>