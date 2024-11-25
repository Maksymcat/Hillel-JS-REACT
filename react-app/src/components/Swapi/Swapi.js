import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import reducer from '../../reducer';

import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';


import ClearButton from '../ClearButton/ClearButton';
import { clearTodos, fetchTodos } from '../Actions/todoAction/todoAction';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const Swapi = () => {
    const dispatch = useDispatch();
    const [variant, setVariant] = React.useState('solid');
    const {todos, loading, error} = useSelector(state => state)
    const [inputValue, setInputValue] = useState(false)
    const apiLink = 'https://jsonplaceholder.typicode.com/'
    const clear = () => {
        dispatch(clearTodos())
    }
    const link = (e) => {
       
        setInputValue(e.target.value)
        }
    const saveInput = () => {
        
        {inputValue ? dispatch(fetchTodos({inputValue, apiLink})) : dispatch(fetchTodos('todos'))
    }
        }
     
 
    if(loading) return (<>
    <Button variant="outlined" disabled onClick={saveInput}>Загрузка...</Button>
    <Input style={{width: '400px'}} placeholder="Завантаження..." variant="soft" onChange={link}/>
        <div><CircularProgress color="secondary" /></div></>)
    if(error) return (<>
     <Button variant="outlined" onClick={saveInput}>Помилка, спробуйте ще раз   </Button>
     <div style={{display: 'flex'}}><div>{apiLink}</div><Input style={{width: '400px'}} placeholder="Помилка, закінчіть запит, todos/comments..." variant="soft"  onChange={link}/></div>
    <div>Error: {error}</div></>)
    return (
        
<>
                <>
                    <Button variant="outlined"  onClick={saveInput}>Запрос   </Button><div style={{display : 'flex'}}><div>{apiLink}</div>
                    <Input style={{width: '400px'}}  placeholder="Закінчіть запит, todos/comments..." variant="soft" onChange={link} /></div>
                    <Button onClick={clear} size="md" variant={variant} color="warning">
          Очистити поле
        </Button>
                    <div style={{ width: '1000px', height: '500px', overflow: 'hidden', border: '3px solid black'}}>
                        <pre style={{ whiteSpace: 'pre-wrap',  }}>{JSON.stringify(todos, null, 2)}</pre>
                    </div>
                   
                </>
        
     </> 
    ); 
};

export default Swapi;
    