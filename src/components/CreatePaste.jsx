import React, { useState } from "react";
import {Button, TextField} from "@material-ui/core"
const userService = require('../services/paste');

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

            return paste.content;
        } else {
            console.log('Create a paste failed');
        }
    }

    function updateContentText(event) {
        console.log('content', event.target.value)
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

            <Button color="primary" onClick={handleClick}>Create a Paste</Button>
        </div>
    );
}

export default CreatePaste;