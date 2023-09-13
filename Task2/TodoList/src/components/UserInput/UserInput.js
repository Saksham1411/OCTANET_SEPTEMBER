import { useState } from 'react';
import './UserInput.css';
const UserInput = ()=>{
    const[value,setValue]=useState('');
    function inputHandler(e){
        setValue(e.target.value);
    }
    return(
        <form>
            <input onChange={inputHandler} className='form-input' type='text'></input>
            <button className='form-btn' type='submit'><i class="fa-solid fa-plus"></i></button>
        </form>
    )
}

export default UserInput;