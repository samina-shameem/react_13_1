import { useState } from "react";
import FirstComponent from "./components/FirstComponent";

const App = () => {
  //let x = 0;

  const [x,setx]=useState(0);
  const btnClick = () => {
    console.log("clicked");
    setx(x+1);
    console.log(x);
  }

  return (
    <div>
      
      <button
        onClick={() => {
          btnClick();
        }}
      >
        Click me
      </button>
      <FirstComponent data={x}/>
    </div>
  );
};

export default App;
