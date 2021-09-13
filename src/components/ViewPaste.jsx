import React from "react";





function ViewPaste(){
    const content = localStorage.getItem("pasteContent");
    return (
        <div className="note">
        <p>You can paste the content by copy the url</p>
        <h1>{content}</h1>
        </div>

    );
}

export default ViewPaste;
