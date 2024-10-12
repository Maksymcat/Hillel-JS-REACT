import React, { useContext, useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import MyContext from "../../Context/context";
import Sield from "../Field/Field";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../counterSlice";

const Home = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [todos, setTodos] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const contextValue = useContext(MyContext);

  return (
    <>
      <Formik
        initialValues={{ name: "" }}
        onSubmit={(values, formikBag) => {
          dispatch(increment());

          setTodos([...todos, values], formikBag.resetForm());
          localStorage.setItem("count", parseInt(count));
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
            <Sield todos={todos} />
            <div>Кількість завдань : {localStorage.getItem("count")}</div>
          </div>
        </Form>
      </Formik>
    </>
  );
};
export default Home;
