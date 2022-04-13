import React from "react";

import TaskListItem from "../TaskListItem/TaskListItem";
import "./TaskList.css";

const TaskList = (props) => {
  return (
    <ul className="task-list">
      {props.items.map((task) => (
        <TaskListItem 
          key={task.id} 
          id={task.id} 
          onDelete={props.onDeleteItem}
        >
          {task.text}
        </TaskListItem>
      ))}
    </ul>
  );
};

export default TaskList;
