import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../../actions/todoAction/todoAction';
import reducer from '../../reducer';
import Input from '../Input/Input';
import Button from '../Button/Button';
import ClearButton from '../ClearButton/ClearButton';
import { clearTodos } from '../../actions/todoAction/todoAction';

const Swapi = () => {
    const dispatch = useDispatch();
    const {todos, loading, error} = useSelector(state => state)
    const [inputValue, setInputValue] = useState(false)
    const clear = () => {
        dispatch(clearTodos())
    }
    const link = (e) => {
       
        setInputValue(e.target.value)
        }
    const saveInput = () => {
        
        {inputValue ? dispatch(fetchTodos({inputValue})) : dispatch(fetchTodos('todos'))
    }
        }
     
 
    if(loading) return (<>
    <Button onClick={saveInput}/>
    <Input onChange={link}/>
        <div>loading...</div></>)
    if(error) return (<>
     <Button onClick={saveInput}/>
     <Input onChange={link}/>
    <div>Error: {error}</div></>)
    return (
        
<>
                <>
                    <Button onClick={saveInput}/>
                    <Input onChange={link} />
                    <ClearButton clear={clear}/>
                    <div style={{ width: '1000px', height: '500px', overflow: 'hidden', border: '3px solid black'}}>
                        <pre style={{ whiteSpace: 'pre-wrap',  }}>{JSON.stringify(todos, null, 2)}</pre>
                    </div>
                   
                </>
        
     </> 
    ); 
};

export default Swapi;
    