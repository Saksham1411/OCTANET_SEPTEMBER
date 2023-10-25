import { useRef, useState } from 'react';
import './UserInput.css';
const UserInput = (props)=>{
    // const[val,setValue]=useState('');

    // function inputHandler(e){
    //     setValue(e.target.value);
    // }

    const taskRef = useRef();
    
    function submitHandler(e){
        e.preventDefault();
        if(taskRef.current.value.trim()!==""){
            props.Submit(taskRef.current.value);
            taskRef.current.value = '';
        }
    }
    return(
        <form onSubmit={submitHandler}>
            <input ref={taskRef} className='form-input' type='text'></input>
            <button  className='form-btn' type='submit'><i className="fa-solid fa-plus"></i></button>
        </form>
    )
}

export default UserInput;