<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-expand-lg navbar-light sticky-top">
      <div class="container-fluid">
        <img
          class="nav_background"
          src="@/assets/navbar_background3.png"
          alt=""
        />
        <a class="navbar-brand" href="#">
          <img
            class="navbar-brand"
            src="@/assets/navbar_logo.2.svg"
            alt=""
            height="70px"
          />
        </a>
        <button
          id="nav_id"
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="#navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent" aria-expanded="false">
          <hr
            style="
              width: 60%;
              text-align: center;
              align-items: center;
              margin: 15px auto auto auto;
              color: black;
            "
          />
          <ul
            class="navbar-nav mb-2 mb-lg-0 mr-0"
            style="width: 100%; justify-content: flex-end"
          >
            <li class="nav-item">
              <router-link
                class="nav-link col"
                class-active="active"
                to="/aaa"
                exact
                ><!--<img src="@/assets/ruler_icon.png" alt="" height="24px">--><i
                  class="fas fa-ruler"
                ></i
              ></router-link>
            </li>

            <li class="nav-item">
              <router-link
                class="nav-link col"
                class-active="active"
                to="/gallery"
                exact
                ><!--<img src="@/assets/ruler_icon.png" alt="" height="24px">--><i
                  class="far fa-images"
                ></i
              ></router-link>
            </li>

            <li class="nav-item">
              <router-link
                class="nav-link col"
                class-active="active"
                to="/about"
                exact
                ><!--<img src="@/assets/info_icon.svg" alt="" height="24px">--><i
                  class="far fa-question-circle"
                ></i
              ></router-link>
            </li>
          </ul>

          <ul
            class="navbar-nav mb-2 mb-lg-0 mr-0"
            style="width: 100%; justify-content: flex-end"
          >
            <li class="nav-item">
              <router-link
                class="nav-link col"
                class-active="active"
                to="/aa"
                exact
                ><!--<img src="@/assets/user.svg" alt="">--><i
                  class="far fa-user"
                ></i
              ></router-link>
            </li>

            <li class="nav-item">
              <router-link
                class="nav-link col"
                class-active="active"
                to="/aaaa"
                exact
                ><!--<img src="@/assets/log-in.svg" alt="">--><i
                  class="fas fa-sign-in-alt"
                ></i
              ></router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  

    <router-view />
  </div>
</template>

<style scoped>
* {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: beige;
  z-index: -2;
  height: 100vh;
}

#nav {
  position: sticky;
  padding: 0px;
  overflow: hidden;
  background-color: beige;
}

#nav a {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: bold;
  color: rgb(0, 0, 0);
  margin-right: 20px;
  margin-left: 20px;
}
.nav_background {
  position: absolute;
  margin-top: -242px;
  width: 1920px;
  z-index: -1;
  opacity: 60%;
  transition: all 0.2s ease-in-out;
}

.container-fluid {
  padding: 15px 0px 15px 0px;
}
img.navbar-brand{
  align-items: center;
}

.navbar-brand {
  margin-right: 50px;
  margin-left: 70px;
  transition: 1s;
}
img.navbar-brand:hover {
  transform: rotate(360deg);
}
a.router-link-exact-active {
  color: goldenrod !important; /* mediumorchid */ /* goldenrod */
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 10px;
  box-shadow: 1px 1px 10px #888888;
  background-color: rgb(0 0 0 / 80%);
}
.fa-question-circle:before {
  vertical-align: middle;
}
.navbar-collapse{
  transition: height 0.4s ease-out;
}

/* .nav-link::after{
  content: '';
  display: block;
  width: 0px;
  height: 2px;
  background-color: #5a9bc5;
  transition: all .2s ease-in-out;
  opacity: 70%;  
}
.nav-link:hover::after{
  width: 100%; 
} */
.nav-link:hover {
  color: #5a9bc5 !important;
}

/*
.router-link-exact-active{
  opacity: 100%;
}
.router-link-active{
  opacity: 30%;
}
*/

.far,
.fas {
  font-size: 21px;
}
.navbar-light .navbar-toggler {
  border-color: transparent;
}

@media screen and (min-width: 991px) {
  /*ovo je min-width a ne max-width*/
  hr {
    display: none;
  }
  ul {
    justify-content: center;
  }
}

@media screen and (max-width: 991px) {
  .nav_background {
    margin-top: 0px;
  }
  .nav-link::after {
    width: 0%;
    height: 0px;
  }
}

@media screen and (max-width: 530px) {
  .navbar-brand {
    margin-left: 0px;
  }
  hr {
    margin-top: 15px;
  }
  #app {
    height: 160vh;
  }
}
</style>
