import React from "react";

const Todo = (props) => {
  // console.log(data);
  return (
    <li
      onClick={props.onClick}
      style={{
        textDecoration: props.completed ? "line-through" : "none",
      }}
    >
      {props.text}{" "}
    </li>
  );
};

// console.log(ownprops.todo);

export default Todo;
