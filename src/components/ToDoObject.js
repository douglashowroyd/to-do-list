import '../App.css';
import React from "react";


function ToDoObject(props) {

    return (
        <li><span>{props.toDo}</span></li>
    );
}

export default ToDoObject
