import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";
import axios from "axios";

export const App = () => {

  const [data,setData] = useState([])

  const getData = async ()=>{
    let a = Math.floor(Math.random()*20)+1;
    const response = await axios.get("https://picsum.photos/v2/list?page=10&limit="+a)
    setData(response.data)
  }

  return (
    <div className="p-10">
      <button onClick={getData} className="bg-teal-300 text-white font-semibold px-3 py-3 rounded-xl active:scale-90">
        Get Data
      </button>
      <div className="p-5 mt-5 min-h-4 min-w-4 bg-black">
        {
          data.map(function(elem,idx){
            return <div key={idx} className="bg-white m-3 rounded-xl text-black flex items-center justify-evenly w-full p-5 ">
              <img src={elem.download_url} alt="" className="h-60"/>
              <h1>{elem.author}</h1>
            </div>
          })
        }
        {/* <img src={data.download_url} alt="" /> */}
      </div>
    </div>
  );
};

export default App;
