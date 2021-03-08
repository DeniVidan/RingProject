<template>
    <div class="d-flex justify-content-center">
    
      <div class="user_card">
        <div class="row">
        <div class="col-sm-6" style="margin-top: 95px; z-index: 1;">
        <div class="d-flex justify-content-center">
          <div class="brand_logo_container">
            <img
              src="@/assets/navbar_logo.2.svg"
              class="brand_logo"
              alt="Logo"
            />
          </div>
        
        </div>
        <div class="d-flex justify-content-center form_container">
          <form>
            <div class="input-group mb-3">
              <div class="input-group-append">
                <span class="input-group-text"
                  ><i class="fas fa-phone">&nbsp; / &nbsp;<i class="fas fa-envelope"></i></i
                ></span>
              </div>
              <input
                type="text"
                name=""
                class="form-control input_user"
                value=""
                placeholder="Phone / E-mail"
              />
            
            </div>
            <div class="input-group mb-2">
              <div class="input-group-append">
                <span class="input-group-text"><i class="fas fa-key"></i></span>
              </div>
              <input
                type="password"
                name=""
                class="form-control input_pass"
                value=""
                placeholder="Password"
              />
            </div>
            <div class="form-group">
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customControlInline"
                />
                <label class="custom-control-label" for="customControlInline"
                  >Remember me</label
                >
              </div>
            </div>
            <div class="d-flex justify-content-center mt-3 login_container">
              <button type="button" name="button" class="btn login_btn">
                Login
              </button>
            </div>
          </form>
        </div>

        <div class="mt-4">
          <div class="d-flex justify-content-center links" style="color: goldenrod;">
            Don't have an account? <a href="/signup" class="ml-2">Sign Up</a>
          </div>
          <div class="d-flex justify-content-center links">
            <a href="#">Forgot your password?</a>
          </div>
        </div>
        </div>
        <div class="col-sm-6">
        <img class="gif_class" src="@/assets/ring_gif.gif" alt="">
        </div>
        </div>
      </div>
      
    </div>
    

</template>


<script scoped>
// @ is an alias to /src

export default {
  name: "Login",
  components: {},
};
</script>


<style scoped>
.d-flex{
    overflow: hidden;
}
.gif_class{
    width: 600px;
    height: 600px;
    margin-left: -200px;
    z-index: -1;
}
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
}
.user_card {
  height: 400px;
  width: auto;
  margin-top: 200px;
  margin-bottom: 0px;
  background: transparent;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.083), 0 6px 20px 0 #00000017;
  -webkit-box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border: 1px solid rgba(218, 165, 32, 0.481);
  border-radius: 5px;
}
.brand_logo_container {
  position: absolute;
  height: 170px;
  width: 170px;
  top: -75px;
  background: transparent;
  padding: 10px;
  text-align: center;
}
.brand_logo {
  height: 150px;
  width: 150px;
}
.form_container {
  margin-top: 100px;
}
.login_btn {
  width: 100%;
  background: #31312c !important;
  color: goldenrod !important;
}
.login_btn:focus {
  box-shadow: none !important;
  outline: 0px !important;
}
.login_container {
  padding: 0 2rem;
}
.input-group-text {
  background: #31312c !important;
  color: goldenrod !important;
  border: 0 !important;
  border-radius: 0.25rem 0 0 0.25rem !important;
}
.input_user,
.input_pass:focus {
  box-shadow: none !important;
  outline: 0px !important;
}
.custom-control-label{
    color: #31312c;
}
.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
  background-color: #31312c !important;
}
.custom-control-label::after{
    background-color: goldenrod !important;
    border-radius: 2px;
}
.form-control{
    background-color: transparent;
    border: 1px solid goldenrod;
}



@media screen and (max-width: 575px) {
  .user_card{
      border: transparent !important;
      box-shadow: none;
      margin-top: 110px;
  }
  .brand_logo{
      display: none;
  }
  .gif_class{
      margin-top: -130px;
      margin-left: -150px;
      opacity: 70%;
  }
}
</style>