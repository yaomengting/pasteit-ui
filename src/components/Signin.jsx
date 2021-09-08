import React, { useState } from 'react';


function Signin(){

    const[data, setData] = useState(){
        email = ""
        password = ""

    }

    setData

    function handleClick(){
        
           console.log("i am l");
        
    }
    return (
        <div className="container"> 
            <form className="form">
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button onClick={handleClick} type="submit">Signin</button>
            </form>
        </div>
    )
    
    ;
}

export default Signin;