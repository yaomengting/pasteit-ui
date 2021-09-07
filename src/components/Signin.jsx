import React from 'react';

function Signin(){
    return (
        <div className="container"> 
            <form className="form">
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit">Signin</button>
            </form>
        </div>
    )
    
    ;
}

export default Signin;