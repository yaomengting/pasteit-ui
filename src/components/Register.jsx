import React, { useState } from 'react';


function Register(){
    const [data, setData] = useState({
        username:"",
        email: "",
        password: "",
        comfirmPassword: ""
    })

    function handleClick() {
        console.log("i am l");
        console.log(data);
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
                <input type="text" onChange={updateUserNameText} placeholder="Username" />
                <input type="text" onChange={updateEmailText} placeholder="Email" />
                <input type="password" onChange={updatePwdText} placeholder="Password" />
                <input type="password" onChange={updateComfirmPwdText} placeholder="Confirm Password" />
                <button onClick={handleClick} type="submit">Register</button>
                <br />
                <label>Already a user of Pasteit? -> </label>
            <a href="./signin">Signin</a>
        </div>
    )
    
    ;
}

export default Register;