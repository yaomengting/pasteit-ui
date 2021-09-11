import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import {Button} from '@material-ui/core'
const userService = require('../services/user');

function Signin() {

    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const history = useHistory();

    async function handleClick() {
        
        const user = {
            email: data.email,
            password: data.password
            
        };
        const signInRes = await userService.login(user);


        if (signInRes == true) {
            console.log('Created success');
            // to do:redirect to create paste page
            return true;
        } else {
            console.log('Create failed');
        }
       return false;
    }

    function updateEmailText(event) {
        console.log('email:', event.target.value)
        setData(prevPaste => {
            return {
                ...prevPaste,
                email: event.target.value
            };
        });
    }

    function updatePwdText(event) {
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
            <input type="text" onChange={updateEmailText} placeholder="Email" />
            <input type="password" onChange={updatePwdText} placeholder="Password" />
            <Button onClick={handleClick} color="primary">Signin</Button>
            </form>
            <br />
            <label>New to Pasteit? -> </label>
            <a href="./register">Register</a>
        </div>
    );
}

export default Signin;