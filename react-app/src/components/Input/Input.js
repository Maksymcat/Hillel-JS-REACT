import React from 'react'

const Input = ({onChange}) => {
    return ( 
        <input placeholder='todos/comments' onChange={onChange} type='text'></input>
    )
}
export default Input;