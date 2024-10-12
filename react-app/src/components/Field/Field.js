import React from "react";
import { Form, Formik, ErrorMessage, Field } from "formik";
const Sield = ({ todos, removeTodo, check }) => {
  return (
    <>
      {todos.map((todo, index) => {
        return (
          <li key={index}>
            {todo.name}{" "}
            <button
              key={index}
              onClick={() => {
                removeTodo(index);
              }}
            >
              asd
            </button>{" "}
            <input
              type="checkbox"
              checked={todo.checked}
              onClick={() => {
                check(index);
              }}
            ></input>
            {todo.checked}
          </li>
        );
      })}
    </>
  );
};
export default Sield;
