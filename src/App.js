import React, { useState } from "react";

import TaskList from "./components/TaskList/TaskList/TaskList";
import TaskInput from "./components/TaskList/TaskInput/TaskInput";
import "./App.css";

const App = () => {
  const [taskList, setTaskList] = useState([
    { text: "Do all exercises!", id: "g1" },
    { text: "Finish the course!", id: "g2" },
  ]);

  const addTaskHandler = (enteredText) => {
    setTaskList((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedTasks;
    });
  };

  const deleteItemHandler = (taskId) => {
    setTaskList((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => task.id !== taskId);
      return updatedTasks;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No tasks found. Maybe add one?</p>
  );

  if (taskList.length > 0) {
    content = <TaskList items={taskList} onDeleteItem={deleteItemHandler} />;
  }

  return (
    <div>
      <section id="task-form">
        <TaskInput onAddTask={addTaskHandler} />
      </section>
      <section id="tasks">
        {content}
        {/* {taskList.length > 0 && (
          <CourseGoalList
            items={taskList}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No tasks found. Maybe add one?</p>
        } */}
      </section>
    </div>
  );
};

export default App;
