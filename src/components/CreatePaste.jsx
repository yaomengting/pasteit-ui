import React, { useState } from "react";


function CreatePaste(props){
    const [paste, setPaste] = useState({
        content: ""
    });

    function handleChange(event){
        const { name, value } = event.target;

        setPaste(prevPaste =>{
          return {
            ...prevPaste,
            [name]: value
          };
        });
    }

    function submitPaste(event){
        props.onAdd(paste);
        setPaste({
            content: ""
        });
    }

    return (
        <div>
            <textarea 
              name="content"
              onChange={handleChange}
              value={paste.content}
              placeholder="Paste here..."
              rows="20"
            />
            <button onClick={submitPaste}>Create a Paste</button>
        </div>
    );
}

export default CreatePaste;