import React, { useState } from 'react';
import './App.css';
import UserInput from './components/UserInput/UserInput';
import Display from './components/Display/Display';


function App() {
  let Data = [];
  const [data, setData] = useState(Data);

  function addItems(item) {
    setData([...data,item]);
  }
  function deleteItems(key){
    console.log(key);
    const copy = [...data];
    copy.splice(key,1);
    console.log(copy);
    setData([...copy]);
  }
  return (
    <div className='Main'>
      <header>
        <h1>TODO-LIST</h1>
      </header>
      <UserInput Submit={addItems} />
      <Display items={data} del={deleteItems}/>
    </div>
  );
}

export default App;
