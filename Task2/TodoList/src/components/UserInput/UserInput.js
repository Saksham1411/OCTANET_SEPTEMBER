import { useState } from 'react';
import './UserInput.css';
const UserInput = (props)=>{
    const[val,setValue]=useState('');
    function inputHandler(e){
        setValue(e.target.value);
    }
    function submitHandler(e){
        e.preventDefault();
        if(val.trim()!==""){
            props.Submit(val);
            setValue('');
        }
    }
    return(
        <form onSubmit={submitHandler}>
            <input onChange={inputHandler} value={val} className='form-input' type='text'></input>
            <button  className='form-btn' type='submit'><i className="fa-solid fa-plus"></i></button>
        </form>
    )
}

export default UserInput;