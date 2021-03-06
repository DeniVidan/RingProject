<template>
  <div class="card">
    <div class="card-header">
      <div class="row">
        <div class="user-info col-sm-6">
          <img style="border-radius: 18px;" width="35px" src="https://eventex.co/wp-content/uploads/2020/08/matt-johnson.jpg" alt="">
          <a style="padding-left: 20px;">mama.mia</a>
        </div>
        <div class="options col-sm-6">
          <i class="fas fa-ellipsis-h"></i>
        </div>
      </div>
    </div>
    <div class="card-body">
      <img
        class="card-img-top"
        src="https://princeza.hr/wp-content/uploads/2020/05/8-2.png"
        alt="Card image cap"
      />
    </div>
    <div class="card-footer">
      <p class="card-text" style="background-color: #bff7e4; font-size: 22px">
        <i class="far fa-heart" style="float: left"></i>
        <i
          class="far fa-paper-plane"
          style="float: left; margin-left: 10px"
        ></i>
      </p>
    </div>
  </div>
</template>


<style scoped>
.col-sm-6{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  vertical-align: middle;
}
.card-body {
  padding: 0px;
}
.card-header {
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: row;
  align-items: center;
}
.card-footer {
  background-color: rgb(255, 255, 255);
}
.option{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 0px;
}
.fa-ellipsis-h{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  vertical-align: middle;
}
.user-info{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  vertical-align: middle;
}
.row{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width:100%;
}
.card {
  background-color: beige;
  margin-bottom: 30px;
  border: 1px solid rgb(169, 169, 138);
  border-radius: 4px;
}
img.card-img-top {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.username {
  height: 50px;
}

@media screen and (max-width: 767px) {
  .card-body {
    border-radius: 0px;
  }
  .card {
    border-radius: 0px;
  }
  img.card-img-top {
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }
  .card-header {
  background-color: beige;
}
.card-footer {
  background-color: beige;
}
.card{
  border: transparent;
}
}
</style>


<script>
export default {
  name: "ImageCard",
  props: {
    msg: String,
  },
};
</script>