import React, { useState } from "react";


function CreatePaste(props){

    const [data, setData] = useState({
        content:"",
    })

    function handleClick() {
        console.log("i am l");
        console.log(data);
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
            <textarea onChange={updateContentText}
              name="content"
              placeholder="Paste here..."
              rows="20"
              
            />
            <button onClick={handleClick}>Create a Paste</button>
        </div>
    );
}

export default CreatePaste;