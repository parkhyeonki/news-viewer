import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null)
  const onClick =()=>{
    axios.get("https://jsonplaceholder.typicode.com/todos/1").then(response=>{
      setData(response.data)
    })
  }
  return (
    
  )
}

export default App;
