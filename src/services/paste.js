const axios = require('axios');
const token = require('./token');
const url = require('./url');
async function createPaste(paste) {

    const url = "http://localhost:8088/pasteit-services/v1/paste";
    const config = {
        headers: { 'Authorization': localStorage.getItem('access_token') }
    }
    try {
        const res = await axios.post(url, paste, config);
        console.log("res", res)
        if (res.status == 201) {
            const uniqueUrl = res.data.success.data.paste.url;
            localStorage.setItem('unique_url', uniqueUrl);
            return true;
        }
    } catch (error) {
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
const pasteUrl = "http://localhost:8088/pasteit-services/v1/paste/" + localStorage.getItem('unique_url');
async function getOnePaste(pasteUrl) {
    const config = {
        headers: { 'Authorization': localStorage.getItem('access_token') }
    }
    try {
        const res = await axios.get(pasteUrl, config);
        if (res.status == 201) {
            return true;
        }
    } catch (error) {
        console.log(JSON.stringify(error));
    }
    return false;
}

module.exports = { createPaste, getAllPaste, getOnePaste };

(async () => {
    return
    const paste = {
        content: "ddd"
    }
    await createPaste(paste);
})()