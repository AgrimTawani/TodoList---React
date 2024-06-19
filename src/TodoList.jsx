/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect, useState } from "react";

function TodoList(){

    const [tasks, setTask] = useState(["Eat breakfast", "Take Shower", "Go to work"]);
    const [newTask, setNewTask] = useState("");
    const count = tasks.length;
    console.log(count);
    useEffect(() => {
        document.title = `Tasks left = ${count}`;
    })

    function handleInput(event){
        setNewTask(event.target.value);
    }

    function deleteTask(index){
        const updatedTask = tasks.filter((_, i) => i !== index);
        setTask(updatedTask);

    }

    function addTask(event){
        
        if(newTask.trim() !== ""){
            setTask(t => [...t, newTask]);
            setNewTask("");
        }
        
    }

    function moveUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index-1]] =
            [updatedTasks[index - 1], updatedTasks[index]];
            setTask(updatedTasks);
        }
        

    }

    function moveDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index+1]] =
            [updatedTasks[index+1], updatedTasks[index]];
            setTask(updatedTasks);
        }
    }

    return(
            <div className="content">
                <h1 className="headings">
                    Todo List
                </h1>
                <input type="text" 
                    placeholder="Enter a task..." 
                    value={newTask}
                    onChange={handleInput}
                />

                <button className="addButton"
                        onClick={addTask}>Add</button>

                <ol>
                    {tasks.map((task, index) =>
                            <li key={index}> 
                                <span className="text">{task}</span>
                                <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                                <button className="move-button" onClick={() => moveUp(index)}>👆</button>
                                <button className="move-button" onClick={() => moveDown(index)}>👇</button>
                            </li>
                
                    )}
                </ol>
            </div>

            );
}

export default TodoList;
