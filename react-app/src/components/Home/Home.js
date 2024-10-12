import React, { useContext, useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import MyContext from "../../Context/context";
import Sield from "../Field/Field";

const Home = () => {
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
  const contextValue = useContext(MyContext);

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
          <div style={{ background: contextValue ? "Purple" : "white" }}>
            <label htmlFor="name">todo</label>
            <Field type="text" id="name" name="name" />
            <button type="submit">Submit</button>
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
export default Home;
