import React from "react";
import Paste from "./Paste";
import Signin from "./Signin";
import Register from "./Register";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
    return (
        <div>
        <Router>
          <div>
          <Route path="/home" component={Homepage} />
          <Route path="/paste" component={Paste} />
          <Route path="/signin" component={Signin} />
          <Route path="/register" component={Register} />
          </div>
        </Router>
        </div>
      
    );
  }
  
  function Homepage() {
    function addPaste(paste){
  
    }
    return (
          <div>
          <h1>This is homepage</h1>
          <Link to='/paste'><h1>Create Paste</h1></Link>
          <Link to='/signin'><h1>Signin</h1></Link>
          <Link to='/register'><h1>Register</h1></Link>
          
          </div>
    );
  }
  
  
  export default App;
  export {Homepage};