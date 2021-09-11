const axios = require('axios');
const token = require('./token');
const url = require('./url');

async function createPaste(paste) {
    
    const url = "http://localhost:8088/pasteit-services/v1/paste";
    const config = {
        headers:{
            Authorization: token.get
        }
    }
    try{
        const res = await axios.post(url, paste,config);
        if(res.status == 201){
            // to do: first print res, and find the paste.url, second, set it;
            url.set("res.paste.url");
            return true;
        }
    }catch(error){
        console.log(JSON.stringify(error));
    }
    return false;

}

async function getAllPaste(userId) {

    // to do: getallpaste by userid 
    
    /*
    const url = "http://localhost:8088/pasteit-services/v1/paste";
    const config = {
        headers:{
            Authorization: token.get
        }
    }
    try{
        const res = await axios.get(url, paste,config);
        if(res.status == 201){
            return true;
        }
    }catch(error){
        console.log(JSON.stringify(error));
    }
    return false;
    */
}
async function getOnePaste(pasteUrl) {
    // first, get uniqueUrl 
    const uniqueUrl = url.get();
   // second, add it after the url;
   const url = "http://localhost:8088/pasteit-services/v1/paste" + "/uniqueUrl";

}

module.exports = { createPaste, getAllPaste, getOnePaste};