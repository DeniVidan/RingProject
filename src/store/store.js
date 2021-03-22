import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        username: localStorage.getItem('username') || null,
        email: localStorage.getItem('email') || null,
        phone: localStorage.getItem('phone') || null,
        token: localStorage.getItem('token') || null
    },
    getters: {
        isLoggedIn: state =>{
            return state.token ? true : false
        },
        getUser: state =>{
            return {
                username: state.username,
                email: state.email,
                phone: state.phone
            }
        }
    },
    mutations: {
        loginUser(state, response){
            state.token = response.data.access_token;
            state.username = response.data.username,
            state.email = response.data.email,
            state.phone = response.data.phone
        },
        logoutUser(state){
            state.token = null,
            state.user = null
        }
    },
    actions: {
        loginUser(context, user){
            return new Promise((resolve, reject) =>{
                axios.post('http://localhost:3000/api/login',{username: user.username, password: user.password})
                .then(response =>{
                    const token = response.data.access_token;
                    console.log(token);
                    localStorage.setItem('token', token);
                    localStorage.setItem('username', response.data.username)
                    localStorage.setItem('phone', response.data.phone)
                    localStorage.setItem('email', response.data.email)
                    context.commit('loginUser', response);
                    resolve(response)
                })
                .catch(error =>{
                    console.log(error)
                    reject(error)
                })

            })
            
        },
        logoutUser(context){
            return new Promise((resolve, reject)=>{
                if(!localStorage.getItem('token')){
                    localStorage.clear()
                    context.commit('logoutUser')
                    reject("No token present");
                }
                axios.post('http://localhost:3000/api/logout',{access_token: localStorage.getItem('token')})
                .then(response=>{
                    localStorage.clear()
                    context.commit('logoutUser')
                    resolve(response);
                })
                .catch(error=>{
                    localStorage.clear()
                    context.commit('logoutUser')
                    reject(error);
                })
            })
        }
    },
    modules: {}
})