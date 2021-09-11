const axios = require('axios');
const token = require('./token');

async function createUser(user) {
    const url = "http://localhost:8088/pasteit-services/v1/user";
    
  
    try{
        
        const res = await axios.post(url, user);
        console.log(res);
        if(res.status == 201){
            return true;
        }
    }catch(error){
        console.log(JSON.stringify(error));
    }
    return false;
}

async function login(user){
    const url = "http://localhost:8088/pasteit-services/login";
    
    try{
        const res = await axios.post(url,user);
        console.log('res:' + res);
        if(res.status == 200){
            // to do: get token from res, headers->authorization, need to know the format through print it
            token.set("");
            return true;
        }
    }catch(error){
        console.log(JSON.stringify(error));
    }
    return false;

}
module.exports  = {createUser, login};