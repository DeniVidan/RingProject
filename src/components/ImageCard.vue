<template>
  <div class="card" style="width: 18rem">
    <img class="card-img-top" src="https://princeza.hr/wp-content/uploads/2020/05/8-2.png" alt="Card image cap" />
    <div class="card-body">
      <p class="card-text" style="background-color: #bff7e4;">
        <i class="far fa-heart" style="float:left;"></i>
        <i class="far fa-paper-plane" style="float:left; margin-left: 10px;"></i>
      </p>
    </div>
  </div>
</template>


<style scoped>
html,body{
    background-color: beige;
}

.card-body{
    background-color: beige;
    border-radius: 10px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
}
.card{
    margin-bottom: 30px;
    border: 1px solid rgb(169, 169, 138);
    border-radius: 11px;
}
img.card-img-top{
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}


@media screen and (max-width: 767px) {
    .card-body{
        border-radius: 0px;
    }
    .card{
        border-radius: 0px;
    }
    img.card-img-top{
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