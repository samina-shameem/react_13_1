//import { useRef, useState } from "react";
//import FirstComponent from "./components/FirstComponent";

import Todo from "./components/Todo";

const App = () => {
  //let x = 0;

  /*const [data,setData]=useState([]);
  const inputRef=useRef(null);*/
  

  return (
    /*<div>
       <input ref={inputRef} type="text"/>
       <button onClick={()=>{setData([...data,inputRef.current.value])}}>Submit</button>
       {data.map((item,index)=>{return <h2 key={index}>{item}</h2>})}
    </div>*/
    <div>
      <Todo/>
    </div>
  )
}

export default App;
