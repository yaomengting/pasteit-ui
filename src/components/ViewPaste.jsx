import React from "react";
import './styles.css';

function ViewPaste() {
    const content = localStorage.getItem("pasteContent");
    return (
        <div className="note">
        <textarea multiline
          rows={20}>{content}</textarea>
        </div>
    );
}

export default ViewPaste;
