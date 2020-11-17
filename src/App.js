import './App.css';
import React, {useState} from "react";
import AddTodo from "./components/AddTodo";
import ToDoObject from "./components/ToDoObject";


function App() {

    const [toDoList, setToDos] = useState([]);
    const [input, setInput] = useState("");

    let addTodo = function () {
       const cloneToDoList = Array.from(toDoList);
       cloneToDoList.push(input);
       setToDos(cloneToDoList);
       setInput('');
    }

    let clearList = function () {
        setToDos([]);
        setInput('');
    }

    let removeElement = function (i) {
        const cloneToDoList = Array.from(toDoList);
        cloneToDoList.splice(i, 1)
        setToDos(cloneToDoList);
    }

    let toDos = ((Array.isArray(toDoList) && toDoList.length > 0)
            ? toDoList.map(toDo => (
                <div><ToDoObject toDo={toDo}/>
                &emsp;&emsp;&emsp;&emsp;
                <button className="add-todo" onClick={() => (removeElement(0))}>
                    Remove
                </button>
                </div>
            ))
            : "All done!"
    )

    let toDos1 = (Array.isArray(toDoList) && toDoList.length > 0)
                    ? toDoList.map((toDo, i) => (
                    <li>
                        <button onClick={() => (removeElement(i))}>
                            Remove
                        </button>
                        &emsp;&emsp;&emsp;&emsp;
                        <span>{toDo}</span>
                    </li>) )
                    : "All done!"

    //<AddTodo addToDoList={newToDo => setToDos(newToDo)}/>

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Your to do list
                </p>
                <div>
                    <input
                        onChange={e => setInput(e.target.value)}
                        value={input}
                    />
                    <button className="add-todo" onClick={addTodo}>
                        Add to do
                    </button>
                </div>

                <ul className="todo-list">
                    {toDos1}
                </ul>
                <button className="add-todo" onClick={clearList}>
                    Clear all
                </button>
            </header>
        </div>
    );
}



export default App