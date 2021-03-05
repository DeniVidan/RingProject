<template>
  <div class="card">
    <div class="card-header">
      <div class="user-info">
        <a>mama.mia</a>
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
      <p class="card-text" style="background-color: #bff7e4">
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

.card-body {
  padding: 0;
}
.card-header {
  background-color: beige;
}
.card-footer {
  background-color: beige;
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