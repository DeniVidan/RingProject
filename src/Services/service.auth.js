const axios = require('axios');

var checkSession = async function(){
    let token = localStorage.getItem('session');
    await axios.get(`http://localhost:3000/api/checkSession?token=${token}`).then(response =>{
        if(response.data){
            return true;
        }
    }).catch(error=>{
        if(!error.response.data){
            return false;
        }
    })

    return false
    
}

var isLoggedIn = function(){
    return localStorage.getItem("session") ? true : false
}
module.exports = {
    checkSession: checkSession,
    isLoggedIn: isLoggedIn
}