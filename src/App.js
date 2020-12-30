import './App.css';
import React, {useState} from "react";
import AddTodo from "./components/AddTodo";
import ToDoObject from "./components/ToDoObject";
import Alert from '@material-ui/lab/Alert';


function App() {

    const [toDoList, setToDos] = useState([]);
    const [alertList, setAlertList] = useState(false);
    const [alertWord, setAlertWord] = useState(false);

    let addTodo = function (input) {
        if (input === null || input === "") {
            setAlertWord(true)
        } else {
            setAlertWord(false)
            if (toDoList.length > 10) {
                setAlertList(true)
            } else {
                const cloneToDoList = Array.from(toDoList);
                cloneToDoList.push(input);
                setToDos(cloneToDoList);
            }
        }
    }

    let clearList = function () {
        setToDos([]);
    }

    let removeElement = function (i) {
        const cloneToDoList = Array.from(toDoList);
        cloneToDoList.splice(i, 1)
        setToDos(cloneToDoList);
        setAlertList(false)
    }

    let toDos = (Array.isArray(toDoList) && toDoList.length > 0)
                    ? <ul className="todo-list"> {listToDos()} </ul>
                    : <p> All done! </p>

    function listToDos(){
        return (
            toDoList.map((toDo, i) => (
                <li>
                    <ToDoObject toDo={toDo} removeElement={removeElement} i={i}/>
                </li>)
            )
        )
    }

    return (
        <div className="App">
            <header className="App-header">

                <p> Your to do list </p>

                <AddTodo addTodo={addTodo} />

                {alertWord ? <Alert severity="error"> Doing nothing doesn't count </Alert> : null }
                {alertList ? <Alert severity="error"> Too many items, remove one before continuing </Alert> : null }

                {toDos}

                <button className="add-todo" onClick={clearList}>
                    Clear all
                </button>

            </header>
        </div>
    );
}



export default App