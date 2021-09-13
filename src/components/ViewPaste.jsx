import { TextField } from "@material-ui/core";
import React from "react";





function ViewPaste(props){
    const content = localStorage.getItem("pasteContent");
    
    return (
        <div>
        <h1>{content}</h1>
        </div>

    );
}

export default ViewPaste;
