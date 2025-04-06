//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import Add from "./components/Add";
import Greetings from "./components/Greetings";

import { Component } from "react";

{/*function components*/}


 function App() {
   
   return (
    <>
     {/*<h1>Hello React</h1>
     <section>
      <h1>Hello my name is Samina</h1>
      <p>Content :)</p>
     </section>
     <form>
      <input type="text" placeholder="Enter your name"/>
      </form>
      <p>welcome to the react world</p>*/}

      {/*<Add/>*/}
      <section>
        <Add/>
        <Greetings/>
      </section>
      </>
      
   );
 }

{/*class components */}

//class App extends Component{
//  //to show content on the screen
//  render(){
//
//    return(
//    <h1>Hello world</h1>
//  );
//  }
//}

export default App;
