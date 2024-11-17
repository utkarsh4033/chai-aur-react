import { useState } from "react";
import "./App.css";

function App() {
  
  let [counter, setCounter] = useState(15);
  const addValue = () => {
    if (counter == 20) {
      setCounter(counter =20)
    } else {
      setCounter(counter + 1 )
    }
  };
  const removeValue = () =>{
      
      if(counter == 0){
        setCounter(counter= 0)
      }
      else{
        setCounter(counter -1)
      }
      
  }
  return (
    <>
      <h1>chai aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>

      <p>value : {counter}</p>
    </>
  );
}

export default App;
