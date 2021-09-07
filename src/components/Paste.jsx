import React, { useState } from 'react';

function Paste(){
    const[paste, setPaste] = useState({
        content:""
    });

    function handleChange(event){
        const{name, value} = event.target;
        setPaste(prevNote =>{
            return{
                ...prevNote,
                [name]: value

            };
        });
    }

    function submitPaste(){

    }
    return (
        <div >
            <h1>New Paste</h1>
            <textarea 
                name="content" 
                value={paste.content} 
                onChange={handleChange}
                placeholder="Paste here..." 
                rows="20">paste here</textarea>
            <button onClick={submitPaste}>Create a paste</button>
        </div>

    )
    
    ;
}

export default Paste;