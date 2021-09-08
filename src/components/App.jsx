import React, { useState } from "react";
import Paste from "./Paste";
import Signin from "./Signin";
import Register from "./Register";
import Homepage from "./Homepage";
import CreatePaste from "./CreatePaste";
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  const [pastes,setPastes] = useState([]);

  function addPaste(newPaste){
    setPastes(prevPastes => {
      return [...prevPastes, newPaste];
    });
  }

  function deletePaste(id){
    setPastes(prevPastes => {
      return prevPastes.filter((pasteItem, index) => {
        return index !== id;
      });
    });
  }
    return (
        <Router>
          <div>
          <CreatePaste onAdd={addPaste} />
          {pastes.map((pasteItem, index) =>{
            return(
              <Paste 
              key={index}
              id={index}
              content={pasteItem.content}
              onDelete={deletePaste}
              />

            );
          })}
          <Route path="/homepage" component={Homepage} />
          <Route path="/paste" component={Paste} />
          <Route path="/signin" component={Signin} />
          <Route path="/register" component={Register} />
          </div>
        </Router>
       
      
    );
  }
  
  
 
  
  export default App;
 