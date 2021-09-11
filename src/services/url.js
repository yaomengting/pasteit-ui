let _url 

function get(){
    return _url;
}

function set(newUrl){
    _url = newUrl;
}

module.exports = {get, set};