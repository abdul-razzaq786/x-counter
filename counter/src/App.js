import {useState} from 'react';

function App() {
  const [count, setCount] = useState(0);

  const countHandler = (num) =>{
    setCount((prevCount) => prevCount + num);
  }
  return (
    <div style={{
      textAlign:'center'
    }} className="App">
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={()=>{
        countHandler(1);
      }}>Increment</button>
      <button onClick={()=>{
        countHandler(-1);
      }}>Decrement</button>
    </div>
  );
}

export default App;