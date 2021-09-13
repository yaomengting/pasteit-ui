import React, { useState } from 'react'; 
import { Button, Link } from '@material-ui/core'
import { useHistory } from "react-router-dom";

const userService = require('../services/user');

function Register() {
    const [data, setData] = useState({

        username: "",
        firstname:"",
        lastname: "",
        email: "",
        password: "",
        comfirmPassword: ""
    })
    const history = useHistory();
    async function handleClick() {
        
        const user = {
            username: data.username,
            password: data.password,
            email: data.email,
            firstname: data.firstname,
            lastname: data.lastname,
            status: 'ACTIVE'
        };
        const createRes = await userService.createUser(user);
        if (createRes == true) {
            console.log('Created success');
            history.push("/signin");
        } else {
            console.log('Create failed');
        }
    }

    function updateUserNameText(event) {
        console.log('username:', event.target.value)
        setData(prevPaste => {
            return {
                ...prevPaste,
                username: event.target.value
            };
        });
    }

    function updateFirstNameText(event) {
        console.log('firstname:', event.target.value)
        setData(prevPaste => {
            return {
                ...prevPaste,
                firstname: event.target.value
            };
        });
    }

    function updateLastNameText(event) {
        console.log('lasttname:', event.target.value)
        setData(prevPaste => {
            return {
                ...prevPaste,
                lastname: event.target.value
            };
        });
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

    function updateComfirmPwdText(event) {
        console.log('confirmpwd:', event.target.value);
        setData(prevPaste => {
            return {
                ...prevPaste,
                comfirmPassword: event.target.value
            };
        });
    }
    return (
        <div className="container">
            <form>
                <input type="text" onChange={updateUserNameText} placeholder="Username" />
                <input type="text" onChange={updateFirstNameText} placeholder="Firstname" />
                <input type="text" onChange={updateLastNameText} placeholder="Lastname" />
                <input type="text" onChange={updateEmailText} placeholder="Email" />
                <input type="password" onChange={updatePwdText} placeholder="Password" />
                <input type="password" onChange={updateComfirmPwdText} placeholder="Confirm Password" />
                <Button onClick={handleClick} color="primary">Register</Button>
            </form>
            <br />
            <label>Already a user of Pasteit? -> </label>
            <Link color="inherit" href="./signin">Signin</Link>
        </div>
    );
}

export default Register;