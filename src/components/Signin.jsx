import React, { useState } from 'react';


function Signin() {

    const [data, setData] = useState({
        email: "",
        password: ""
    })

    function handleClick() {
        console.log("i am l");
        console.log(data);
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
            <input type="text" onChange={updateEmailText} placeholder="Email" />
            <input type="password" onChange={updatePwdText} placeholder="Password" />
            <button onClick={handleClick} type="submit">Signin</button>
            <br />
            <label>New to Pasteit? -> </label>
            <a href="./register">Register</a>
        </div>
    );
}

export default Signin;