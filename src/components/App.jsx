import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Signin from "./Signin";
import Register from "./Register";
import Homepage from "./Homepage";
import CreatePaste from "./CreatePaste";
import User from "./User";
import ViewPaste from "./ViewPaste";
import Header from "./Header";

function App() {
  const url = localStorage.getItem("unique_url");
    return (
        <Router>
          <div>
          <Header />
          <Route exact path="/">
            <Redirect to='/homepage' />
          </Route>
          <Route path="/homepage" component={Homepage} />
          <Route path="/paste/create" component={CreatePaste} />
          <Route path="/signin" component={Signin} />
          <Route path="/register" component={Register} />
          <Route path="/user" component={User} />
          <Route path="/paste/" component={ViewPaste} />
          </div>
        </Router>
       
      
    );
  }
  
  
 
  
  export default App;
 