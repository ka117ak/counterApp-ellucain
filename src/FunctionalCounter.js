import { useState } from 'react';
import './App.css';
import Button from '@mui/material/Button';


function FunctionalCounter() {
  const [count, setCount] = useState(0);

  function Addvalue(){
    setCount(e => e+= 1);
  }

  function Deletevalue(){
    setCount(e => e -= 1);
  }

  return (
    <div className="App">
      <h2 className='title'>This counter use React functional componenets</h2>
        <div className='display'>
          <Button variant="contained" onClick={() => {Addvalue()}} className='leftButton'>Increment</Button>
          <br/>
          <span className='counterValue'>{count}</span>
          <br/>
          <Button variant="contained" onClick={() => {Deletevalue()}} className='rightButton'>Decrement</Button>
        </div>
    </div>
  );
}

export default FunctionalCounter;

