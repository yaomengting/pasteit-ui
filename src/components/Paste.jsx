import React from 'react';

function Paste(props){
    function handleClick(){
        props.onDelete(props.id);
    }

    return (
        <div>
            <p>{props.content}</p>
            <button onClick={handleClick}>DELETE</button>
        </div>

    );
}

export default Paste