import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Gallery from '../views/Gallery.vue'
import store from '../store/store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/about'
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/gallery',
    name: 'Gallery',
    meta: {
      requiresAuth: true
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Gallery
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      requiresVisitor: true
    },

    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    meta: {
      requiresVisitor: true
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Signup.vue')
  },
  {
    path: '/measure',
    name: 'Measure',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Measure.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: {
      requiresAuth: true
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if(!store.getters.isLoggedIn){
      next({
        name: 'Login'
      })
    } else {
       next()
    }
  } else if(to.matched.some(record => record.meta.requiresVisitor)) {
    if(store.getters.isLoggedIn){
      next({
        name: 'Gallery'
      })
    } else {
       next()
    } 
  } else {
    next()
  }
})

export default router
