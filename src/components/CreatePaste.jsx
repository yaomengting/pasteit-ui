import React, { useState, useEffect } from "react";
import {Button, TextField} from "@material-ui/core"
import axios from "axios";
import userService from '../services/paste';
import ViewPaste from "./ViewPaste";



function CreatePaste(props){

    const [data, setData] = useState({
        content:"",
    })
  
    async function handleClick() {
        const paste = {
            content: data.content
        }
         
        const createRes = await userService.createPaste(paste);
        
        if (createRes == true) {
            console.log('Create a new paste');
            window.location.href = "http://localhost:3000/paste/" + localStorage.getItem("unique_url");
            localStorage.setItem("viewPaste", "true");
            localStorage.setItem("pasteContent", data.content);
        } else {
            console.log('Create a paste failed');
        }
    }

   
    function updateContentText(event) {
        setData(prevPaste => {
            return {
                ...prevPaste,
                content: event.target.value
            };
        });
    }
    
    return (
        <div>
            <TextField
            name="content"
              placeholder="Paste here..."
            onChange={updateContentText}
          id="content"
          label="Multiline"
          multiline
          rows={20}
          variant="outlined"
        />

            <Button color="primary" onClick={handleClick} >Create a Paste</Button>
           <ViewPaste />;
        </div>
    );
}

export default CreatePaste;