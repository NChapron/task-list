import React from "react";

import "./TaskListItem.css";

const TaskListItem = (props) => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <li className="task-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default TaskListItem;
