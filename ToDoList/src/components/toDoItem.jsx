import React from "react";

function toDoItem(props){

    return(
    <div onClick={() => props.onChange(props.id)}>
    <li>
        {props.text}
    </li>
    </div>);
}

export default toDoItem;