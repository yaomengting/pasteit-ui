import React from 'react';
import { Link } from 'react-router-dom';

function Homepage(){
    return(
        <div>
          <h1>This is homepage</h1>
          <Link to='/signin'><h1>Signin</h1></Link>
          <Link to='/register'><h1>Register</h1></Link>
          </div>
    );
}

export default Homepage;