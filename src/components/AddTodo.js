import '../App.css';
import React, {useState} from "react";


function AddTodo(props) {

    const [input, setInput] = useState("");

    function handleClick() {
        props.addTodo(input)
        setInput("")
    }

    return (
        <div>
            <input
                onChange={e => setInput(e.target.value)}
                value={input}
            />
            <button className="add-todo" onClick={handleClick}>
                Add item
            </button>
        </div>
    );
}

export default AddTodo