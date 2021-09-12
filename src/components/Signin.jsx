import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import {Button} from '@material-ui/core'
const userService = require('../services/user');

function Signin() {

    const [data, setData] = useState({
        username: "",
        password: ""
    })

    const history = useHistory();

    async function handleClick() {
        
        const user = {
            username: data.username,
            password: data.password
            
        };
        const signInRes = await userService.login(user);
        if (signInRes == true) {
            console.log('Sign in success');
            history.push("/paste/create");
        } else {
            console.log('Sign in failed');
        }
    }

    function updateUserName(event) {
        console.log('username:', event.target.value);
        setData(prevPaste => {
            return {
                ...prevPaste,
                username: event.target.value
            };
        });
    }

    function updatePassword(event) {
        console.log('pwd:', event.target.value);
        setData(prevPaste => {
            return {
                ...prevPaste,
                password: event.target.value
            };
        });
    }
    return (
        <div className="container">
        <form>
            <input type="text" onChange={updateUserName} placeholder="UserName" />
            <input type="password" onChange={updatePassword} placeholder="Password" />
            <Button onClick={handleClick} color="primary">Signin</Button>
            </form>
            <br />
            <label>New to Pasteit? -> </label>
            <a href="./register">Register</a>
        </div>
    );
}

export default Signin;