import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
//   let myobj = {
//     username: "Utkarsh",
//     age: 21
//   }
//   let myArr = [1,23,4]
  
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        tailwind test
      </h1>
      <Card  username= "chaiorcode" />
      
    </>
  );
}

export default App;
