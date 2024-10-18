import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  let myObj = {
    name: "Hitesh",
    age: 25,
    address: {
      city: "Jaipur",
      state: "Karnataka",
      country: "India",
    },
  };

  let new_arr = [1,2,3,1,2,5,4,6,5,7,10,4,3,2,2,4,2,23]

  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 rounded-md">
        Vite with Tailwind
      </h1>
      <Card username="Hitesh" myArr = {new_arr}/>
      <Card username="Json" post="stuff engineer" />
    </>
  );
}

export default App;
