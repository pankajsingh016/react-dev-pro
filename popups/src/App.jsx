import React, { useState } from "react";
import Model from "./components/Modal";

function App() {
  const [showModel, setShowModel] = useState(false);
  return (
    <div className="h-screen bg-zinc-800 flex flex-col items-center gap-6 text-white">
      <h1 className="text-5xl font-bold mt-4">POPUP MODAL</h1>
      <button
      onClick={()=>{
        setShowModel(true)
      }}
        className="bg-emerald-800 
      w-30 
      py-4 px-10 
      rounded-xl font-semibold 
      transition delay-300 duration-300 ease-in-out 
      hover:scale-[1.2] hover:bg-emerald-300 hover:text-black"
      >
        Get the eBook
      </button>

      {showModel && <Model onClose={()=>{setShowModel(false)}}/>}
    </div>
  );
}
export default App;
