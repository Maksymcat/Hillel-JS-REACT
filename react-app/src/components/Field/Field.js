import React from "react";
import { Form, Formik, ErrorMessage, Field } from "formik";
import Button from '@mui/joy/Button';
import Checkbox from '@mui/joy/Checkbox';
import Link from '@mui/joy/Link';
import { pink } from '@mui/material/colors';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Sield = ({ todos, removeTodo, check }) => {
  return (
    <>
      {todos.map((todo, index) => {
        return (
          <li className="todo_item"   key={index}>
           <span  class="todo_name">{todo.name}{" "}</span> 
          
            <Button  key={index} onClick={() => {
              removeTodo(index)
            }} size="md" variant="plain" color="danger" >
          Видалити завдання
        </Button>
          
            <Checkbox style={{marginTop: '0.7%'}} className="todo_checkbox" variant="outlined"
             color="warning"
           
             onClick={() => {
               check(index);
             }}
            checked={todo.checked}
  {...label}
  
  sx={{
    color: pink[800],
    '&.Mui-checked': {
      color: pink[600],
    },
  }}
/>
            {todo.checked}
          </li>
                
        );
          
      })}

    </>
  );
};
export default Sield;
