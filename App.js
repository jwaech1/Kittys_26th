import "./styles.css";
import Button from '@mui/material/Button';
import {useState} from "react";



export default function App() {
  const [count, setCount] = useState(0);
 
  const handleClick = () => {
    console.log(count)
    setCount(count + 1);
  }

  const lowerValue = () => {
    console.log(count)
    setCount(count - 1);
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>      <button id="Button1" onClick={handleClick}>Box1</button>
      <div> {count}
      <Button variant="contained" id="Button2" onClick={lowerValue}>Box2</Button>
      </div>
      </div>


  );
}