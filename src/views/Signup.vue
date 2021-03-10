<template>
<!--     <div class="d-flex justify-content-center">
    
      <div class="user_card">
        <div class="row">
        <div class="col-sm-6" style="margin-top: 30px; z-index: 1;">
        <div class="d-flex justify-content-start ml-5" style="font-size: 30px;">
          <div class="signup_text">Sign up!</div>
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
            <div class="input-group mb-2">
              
              <input
                type="text"
                name=""
                class="form-control input_user"
                value=""
                placeholder="First name"
              />
            
            </div>
            <div class="input-group mb-2">
              
              <input
                type="text"
                name=""
                class="form-control input_pass"
                value=""
                placeholder="Last name"
              />
            </div>

            <div class="input-group mb-2">
              
              <input
                type="email"
                name=""
                class="form-control input_pass"
                value=""
                placeholder="E-mail"
              />
            </div>

            <div class="input-group mb-2">
              
              <input
                type="tel"
                name=""
                class="form-control input_pass"
                value=""
                placeholder="Phone number"
              />
            </div>

            <div class="input-group mb-2">
              
              <input
                type="password"
                name=""
                class="form-control input_pass"
                value=""
                placeholder="Password"
              />
            </div>

            <div class="input-group mb-2">
              
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
                Sign up
              </button>
            </div>
          </form>
        </div>

        <div class="mt-4">
          <div class="d-flex justify-content-center links" style="color: goldenrod;">
            Don't have an account? <a href="#" class="ml-2">Sign Up</a>
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
      
    </div> -->
    
<div class="container-fluid" id="grad1">
    <div class="row justify-content-center mt-0" style="background: beige;">
        <div class="col-11 col-sm-9 col-md-8 col-lg-6 text-center p-0 mt-3 mb-2 wrap">
            <div class="card px-0 pt-4 pb-0 mt-3 mb-3" style="background: beige;">
                <h2>Sign Up</h2>
                <div class="row">
                    <div class="col-md-12 mx-0">
                        <form id="msform">
                            <!-- progressbar -->
                                <ul id="progressbar">
                                <li class="active fas fa-lock" id="account"><strong>Account</strong></li>
                                <li id="verification" class="fas fa-fingerprint"><strong>Verification</strong></li>
                                <li id="confirm" class="fas fa-check-circle"><strong>Finish</strong></li>
                            </ul> <!-- fieldsets -->
                            <fieldset>
                                <div class="form-card">
                                    <h2 class="fs-title">Account Information</h2>
                                    <input v-model="email" type="email" placeholder="Email *" required/>
                                    <input v-model="username" type="text" placeholder="User Name *" required/>
                                    <input v-model="password" type="password" placeholder="Password *" required/>
                                    <input id="cpsw" v-model="cpassword" type="password" placeholder="Confirm Password *"/>
                                    <p style="color: red;  margin-left: 0px; font-size: 14px;" v-if="passwordNotMatching">Passwords do not match</p>
                                    <input v-model="phone" type="phone" placeholder="Phone *" style="margin-top: 20px !important;" required/>
                                    <p style="color: red; float: right;">* field is required</p>
                                </div>
                                <input type="button" name="next" class="next action-button" :disabled="!fieldRequired()" :class="{disabled: !fieldRequired()}" value="Next Step" />
                            </fieldset>
                            <fieldset>
                                <div class="form-card">
                                    <h2 class="fs-title">Verification</h2>
                                    <p>Verification number is sent to your phone</p>
                                    <h3><b>{{phone}}</b></h3><br>
                                    <input type="text" v-model="verification" placeholder="Verification number" />
                                    <input type="button" @click="verifyNumber()" name="verify" class="action-button" value="Verify">
                                </div>
                                 <input type="button" name="previous" class="previous action-button-previous" value="Previous" />
                                 <input @click="signup()" type="button" :disabled="!verified" :class="{disabled: !verified}" name="next" class="next action-button" value="Next Step" />
                            </fieldset>
                            
                            <fieldset>
                                <div class="form-card">
                                    <h2 class="fs-title text-center">Success !</h2> <br><br>
                                    <div class="row justify-content-center">
                                        <div class="col-3"> <img src="https://img.icons8.com/color/96/000000/ok--v2.png" class="fit-image"> </div>
                                    </div> <br><br>
                                    <div class="row justify-content-center">
                                        <div class="col-7 text-center">
                                            <h5>You Have Successfully Signed Up</h5>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>


<script scoped>

import axios from 'axios';

export default {
  name: "Signup",
  data(){
    return {
      email: "",
      username: "",
      password: "",
      cpassword: "",
      passwordNotMatching: false,
      phone: null,
      verification: "",
      verified: false,
    }
  },
  methods : {
    async signup(){
      let userInfo = {
        email: this.email,
        username: this.username,
        password: this.password,
        phone: this.phone
      }
      let res = await axios.post('http://localhost:3000/api/signup',{userInfo})
      console.log(res);
    },
    async verifyNumber(){
      let res = await axios.get(`http://localhost:3000/api/verify?number=${this.phone}`);
      console.log(res.data);
      this.verified = res.data;
    },
    fieldRequired(){
      let button = document.getElementById("cpsw");
      if(this.email != null && this.email != "" && this.phone != null && this.phone != "" && this.username != null && this.username != "" && this.password != null && this.password != ""){
        if(this.password != this.cpassword && this.password != "" && this.cpassword != ""){
          this.passwordNotMatching = true;
          button.style = "border-bottom: 2px solid red;"
          console.log(button);
          return false;
        }else{
          button.style = "border-bottom: 1px solid #ccc;"
          this.passwordNotMatching = false;
        }
        return this.cpassword == ""?false:true
      }
        return false
    }
  },
  components: {},
};

var $ = require('jquery')
// @ is an alias to /src
$(document).ready(function(){

  var current_fs, next_fs, previous_fs; //fieldsets
  var opacity;

  $(".next").click(function(){

  current_fs = $(this).parent();
  next_fs = $(this).parent().next();

  //Add Class Active
  $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

  //show the next fieldset
  next_fs.show();
  //hide the current fieldset with style
  current_fs.animate({opacity: 0}, {
  step: function(now) {
  // for making fielset appear animation
  opacity = 1 - now;

  current_fs.css({
  'display': 'none',
  'position': 'relative'
  });
  next_fs.css({'opacity': opacity});
  },
  duration: 600
  });
  });

  $(".previous").click(function(){

  current_fs = $(this).parent();
  previous_fs = $(this).parent().prev();

  //Remove class active
  $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

  //show the previous fieldset
  previous_fs.show();

  //hide the current fieldset with style
  current_fs.animate({opacity: 0}, {
  step: function(now) {
  // for making fielset appear animation
  opacity = 1 - now;

  current_fs.css({
  'display': 'none',
  'position': 'relative'
  });
  previous_fs.css({'opacity': opacity});
  },
  duration: 600
  });
  });

  $('.radio-group .radio').click(function(){
  $(this).parent().find('.radio').removeClass('selected');
  $(this).addClass('selected');
  });

  $(".submit").click(function(){
  return false;
  })

});
</script>


<style scoped>
.disabled {
  background: #31312c63 !important;
}
h2, h3, p {
  margin-left: 10px;
}

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
  height: 550px;
  width: auto;
  margin-top: 150px;
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
  top: -85px;
  background: transparent;
  padding: 10px;
  text-align: center;
  margin-left: 190px;
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
  cursor: default;
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

.input-group:hover + .form-control{
    border: 1px solid #e8cf81;
    transition: all 0.5s ease-in-out;
}

.signup_text{
  display: none;
  font-family: 'Ubuntu', sans-serif;
}
form{
  width: 80%;
}


@media screen and (max-width: 575px) {
  .user_card{
      border: transparent !important;
      box-shadow: none;
      margin-top: 230px;
  }
  .brand_logo{
      display: none;
  }
  .gif_class{
      margin-top: -130px;
      margin-left: -150px;
      opacity: 70%;
  }
  .input_user{
    width: 90%;
  }
  .signup_text{
  display: inline-block;
  }
  .form_container{
    margin-top: 40px;
  }
  .wrap{
    box-shadow: 0px 0px 0px transparent !important;
    border: none !important;
  }

}

/* aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */
* {
    margin: 0;
    padding: 0;
}
.wrap{
  box-shadow: 1px 1px 15px #00000052; 
  border: 1px solid rgba(218, 165, 32, 0.624);
  border-radius: 10px;
}

html {
    height: 100%
}

#grad1 {
  background-color: beige;
  min-height: 88.5vh;
}

#msform {
    text-align: center;
    position: relative;
    margin-top: 20px;
    width: 100%;
}

#msform fieldset{
    background: beige !important;
}
#msform fieldset .form-card {
    background: beige;
    border: 0 none;

    padding: 10px 20px 5px 20px;
    box-sizing: border-box;
    width: 94%;
    margin: 0 1% 20px 1%;
    position: relative
}

#msform fieldset {
    background: white;
    border: 0 none;
    border-radius: 0.5rem;
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    padding-bottom: 20px;
    position: relative
}

#msform fieldset:not(:first-of-type) {
    display: none
}

#msform fieldset .form-card {
    text-align: left;
    color: #9E9E9E
}

#msform input,
#msform textarea {
    padding: 0px 8px 4px 8px;
    border: none;
    border-bottom: 1px solid #ccc;
    border-radius: 0px;
    margin-bottom: 25px;
    margin-top: 2px;
    width: 100%;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    color: #2C3E50;
    font-size: 16px;
    letter-spacing: 1px;
    background-color: beige;
}

#cpsw {
  margin-bottom: 1px !important;
}

#msform input:focus,
#msform textarea:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    border: none;
    font-weight: bold;
    border-bottom: 2px solid skyblue;
    outline-width: 0
}

#msform .action-button {
    width: 130px;
    background: #31312c;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.878);
    border: 0 none;
    border-radius: 20px;
    cursor: pointer;
    padding: 10px 5px;
    margin: 10px 5px
}

#msform .action-button:hover,
#msform .action-button:focus {
    box-shadow: 0 0 0 2px white, 0 0 0 3px skyblue
}

#msform .action-button-previous {
    width: 130px;
    background: #616161;
    font-weight: bold;
    color: white;
    border: 0 none;
    border-radius: 20px;
    cursor: pointer;
    padding: 10px 5px;
    margin: 10px 5px
}

#msform .action-button-previous:hover,
#msform .action-button-previous:focus {
    box-shadow: 0 0 0 2px white, 0 0 0 3px #616161
}

select.list-dt {
    border: none;
    outline: 0;
    border-bottom: 1px solid #ccc;
    padding: 2px 5px 3px 5px;
    margin: 2px
}

select.list-dt:focus {
    border-bottom: 2px solid skyblue
}

.card {
    z-index: 0;
    border: none;
    border-radius: 0.5rem;
    position: relative
}

.fs-title {
    font-size: 25px;
    color: #2C3E50;
    margin-bottom: 10px;
    font-weight: bold;
    text-align: left
}

#progressbar {
    margin-bottom: 30px;
    overflow: hidden;
    color: lightgrey
}

#progressbar .active {
    color: #000000
}

#progressbar li {
    list-style-type: none;
    font-size: 16px;
    width: 33.3%;
    float: left;
    position: relative
}

/* #progressbar #account:before {
    font-family: FontAwesome;
    content: "\f023"
} */

/* #progressbar #personal:before {
    font-family: FontAwsome;
    content: "\f007"
}

#progressbar #payment:before {
    font-family: FontAwesome;
    content: "\f09d"
}

#progressbar #confirm:before {
    font-family: FontAwesome;
    content: "\f00c"
} */

#progressbar li:before {
    width: 50px;
    height: 50px;
    line-height: 45px;
    display: block;
    font-size: 20px;
    color: #ffffff;
    background: lightgray;
    border-radius: 50%;
    margin: 0 auto 10px auto;
    padding: 2px
}

#progressbar li:after {
    content: '';
    width: 100%;
    height: 2px;
    background: lightgray;
    position: absolute;
    left: 0;
    top: 25px;
    z-index: -1
}

#progressbar li.active:before,
#progressbar li.active:after {
    background: skyblue
}

.radio-group {
    position: relative;
    margin-bottom: 25px
}

.radio {
    display: inline-block;
    width: 204;
    height: 104;
    border-radius: 0;
    background: lightblue;
    box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    cursor: pointer;
    margin: 8px 2px
}

.radio:hover {
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.3)
}

.radio.selected {
    box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.1)
}

.fit-image {
    width: 100%;
    object-fit: cover
}

</style>
