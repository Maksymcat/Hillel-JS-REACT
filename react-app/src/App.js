import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import Console from './components/Console/Console';
import Title from './components/Title/Title';
const App = () => {
  
  const [inputValue, setInputValue] = useState('');
  const [logs, setLogs] = useState([]);
  

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    if (inputValue.trim() !== '') {
      console.log(inputValue);
      setLogs([...logs, inputValue]); 
      setInputValue(''); 
    }
  };

  return (
    <div>
      <Title />
      <div className='d-flex my-3'>
        <div className='bg-secondary ms-3'>https://swapi.dev/api/</div>
      <Input value={inputValue} onChange={handleInputChange} />
      <Button onClick={handleButtonClick} />
      </div>
      <Console logs={logs} />
    </div>
  );
};

export default App;