const axios = require('axios');

async function createUser(user) {
    const url = "http://localhost:8088/pasteit-services/v1/user";
    try {
        const res = await axios.post(url, user);
        console.log("resgiter res: ");
        console.log(res);
        if (res.status == 201) {
            return true;
        }
    } catch (error) {
        console.log(JSON.stringify(error));
    }
    return false;
}

async function login(user) {
    const url = "http://localhost:8088/pasteit-services/login";

    try {
        const res = await axios.post(url, user);
        console.log("loginres", "res");
        if (res.status === 200) {
            const accessToken = "Bearer " + res.data.success.data.access_token;
            localStorage.setItem('access_token', accessToken);
            return true;
        }
    } catch (error) {
        console.log(JSON.stringify(error));
    }
    return false;
}
module.exports = {createUser, login };

(async () => {
    return
    const user = {
        username: "lll",
        password: "lll"
    }
    await login(user);
})()