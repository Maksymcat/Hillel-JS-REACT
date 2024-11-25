import React, {  useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from '@mui/joy/Button';
import Sield from "../Field/Field";

import Link from '@mui/joy/Link';


const Todos = () => {
  const [todos, setTodos] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const removeTodo = (index) => {
    todos.splice(index, 1);
    setTodos([...todos]);
  };
  const check = (index) => {
    const updateTodos = todos.map((todo, i) => {
      if (i === index) {
        console.log(todo.checked);
        return { ...todo, checked: !todo.checked };
      }
      return todo;
    });
    localStorage.clear();
    setTodos(updateTodos);
  };


  return (
    <>
      <Formik
        initialValues={{ name: "", checked: false }}
        onSubmit={(values, formikBag) => {
          setTodos([...todos, values], formikBag.resetForm());
        }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Обов`язкове поле";
          } else if (values.name.length < 5) {
            errors.name = "Не менше 5 символів";
          }
          return errors;
        }}
      >
        <Form>
          <div style={{  }}>
            <label className="input_path"  htmlFor="name">ben</label>
            <Field id="name" name="name" placeholder="ben"  style={{width: '1100px'}}/>
            <Button type='submit' variant="soft" >
        Ввести новое задание
      </Button>
            <ErrorMessage
              name="name"
              component="div"
              className="error-message --bs-red"
            />
            <Sield todos={todos} removeTodo={removeTodo} check={check} />
          </div>
        </Form>
      </Formik>
    
    </>
  );
};
export const todosTitle = 'TODOS';
export default Todos;
