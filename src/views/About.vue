<template>
  <div class="about">
    <div class="row">
      <div class="col-md-4">
        <div class="title">ABOUT</div>
        <div class="content">
          We are a team of x programers and web designers and also students who
          had a vision of this app and made it a reality. Thank you for using
          the app from happy developers: <br />
          <img src="@/assets/gif_proba.gif" alt="" width="100px" />
          <img src="@/assets/gif_proba.gif" alt="" width="100px" />
          <img src="@/assets/gif_proba.gif" alt="" width="100px" />
        </div>
      </div>

      <div class="col-md-4 linija">
        <div class="title">APP PURPOUSE</div>
        <div class="content">
          Form the women perspective you are measuring your finger and making it
          easier for the man to find your ring finger size. From the mans
          perspective you need to put in a number to find her/his ring size. It
          is easy as that
        </div>
      </div>

      <div class="col-md-4 linija">
        <div class="title">NOTICE</div>
        <div class="content">
          Anyone can access your ring size date. In any time you can update or
          remove data. Works only if it is measured properly. Can't count 100%
          on this
        </div>
      </div>
    </div>

    <footer class="text-center text-lg-start fixed-bottom">
      <!-- Copyright -->
      <div class="row1">

        <div class="col-md-5" style="justify-content:center; vertical-align:center;">
          If you want to get started ...
        </div>
        <div class="col-md-5" style="justify-content:center;">
          <a class="button" href="/login">
            PRESS THIS BUTTON
          </a>
        </div>


      </div>
      <!-- Copyright -->
    </footer>
  </div>
</template>


<style scoped>
* {
  margin: 0;
}
.about {
  display: flex;
  margin-top: 80px;
  justify-content: center;
  align-items: center;
  background-color: beige;
  overflow: hidden;
}
.row {
  justify-content: center;
  width: 70%;
  font-family: "Quicksand", sans-serif;
  color: rgb(72, 72, 72);
  z-index: 0cd;
  transition: all 0.2s ease-in-out;
}
.row1{
  display: flex;
  flex: nowrap;
  flex-direction: row;
  padding-top: 30px;
  padding-bottom: 30px;
  justify-content: center;
}
.col-md-4 {
  justify-content: center;
  margin-bottom: 25px;
  padding-top: 25px;
}
.col-md-5{
  align-self: center;
}
.title {
  font-size: 32px;
}
.content {
  margin-top: 10px;
  font-size: 24px;
}
.linija {
  border-left: 1px solid #f9c0c7;
}
footer{
  font-family: "Quicksand", sans-serif;
  background-color: #31312c;
  color: #daa520;
}
a.button{
  color: #31312c;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 10px;
  box-shadow: 0px 0px 6px 0px white !important;
  background-color: #f9c0c7;
  padding: 10px;
}

@media screen and (max-width: 991px) {
  .row {
    width: 100%;
  }
  .about {
    margin-top: 0px;
  }
}
@media screen and (max-width: 767px) {
  .linija {
    border-left: 1px solid transparent;
    border-top: 1px solid #f9c0c7;
  }
  .row{
    margin-bottom: 120px;
  }
}
</style>