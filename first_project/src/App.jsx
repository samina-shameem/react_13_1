import { useState } from "react";

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
      {x}
      <button
        onClick={() => {
          btnClick();
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default App;
