let _token 

function get(){
    return _token;
}

function set(newToken){
    _token = newToken;
}

module.exports = {get, set};