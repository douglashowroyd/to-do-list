import '../App.css';
import React, {useState} from "react";


function ToDoObject(props) {
    const [completed, setCompleted] = useState(false);

    return (
        <div className="toDo">
            <span onClick={() => (setCompleted(!completed))} >{completed ? <s>{props.toDo} </s> : props.toDo}</span>
            <button onClick={() => (props.removeElement(props.i))}>
                Remove
            </button>
        </div>
    );
}

export default ToDoObject
