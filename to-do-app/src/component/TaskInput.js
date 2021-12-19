import React, {useState} from "react";
import "../App.css";


function TaskInput({tasks, setTasks}) {
  // Save what I wrote in the input field into a state?
  const [input, setInput] = useState('')
  // When i type, a function should run that saves the states of the input
  const handleChange = (e) => {
    setInput = (e.target.value)
  }

  // I need a function that runs when I submit
  const handleForm = (e) => {
    e.preventDefault()
    // ADD what i input into the tasks array
    //Create an object



//ONLY CREATE OBJECT IF THERE IS AN INPUT
//Create an object with whatever I wrote in input as the text:
    if(input) {

      const newTask = {
        id: 7,
        text: input,
        status: false,
      } 
    }
  }

  return (
    <div className="new-todo">
      <div className="check">
        <div className="check-mark"></div>
      </div>
      <div className="new-todo-input">
        <form>
          <input value = {input} onChange={handleChange} type='text' placeholder='Create a new todo...'></input>
        </form>
      </div>
    </div>
  );
}

export default TaskInput;
