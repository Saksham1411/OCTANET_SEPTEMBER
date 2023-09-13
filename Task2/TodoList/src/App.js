import React from 'react';
import './App.css';
import UserInput from './components/UserInput/UserInput';
import Display from './components/Display/Display';
function App() {

  return (
    <div className='Main'>
      <header>
        <h1>TODO-LIST</h1>
      </header>
      <UserInput />
      <Display/>
    </div>
  );
}

export default App;
