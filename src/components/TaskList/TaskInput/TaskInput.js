import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./TaskInput.css";

const TaskInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const taskInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onAddTask(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Task list</label>
        <input type="text" onChange={taskInputChangeHandler} />
      </div>
      <Button type="submit">Add task</Button>
    </form>
  );
};

export default TaskInput;
