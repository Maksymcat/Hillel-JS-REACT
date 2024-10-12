import React from "react";
import { Form, Formik, ErrorMessage, Field } from "formik";
const Sield = ({ todos }) => {
  return (
    <>
      {todos.map((todo, index) => {
        return (
          <li key={index}>
            {todo.name}{" "}
         
            
            
          </li>
        );
      })}
    </>
  );
};
export default Sield;
