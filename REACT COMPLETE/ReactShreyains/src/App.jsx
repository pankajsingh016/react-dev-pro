import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";
import axios from "axios";
import {Routes,Route} from 'react-router-dom';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Services from "./Pages/Services";


export const App = () => {

  const [data,setData] = useState([])

  const getData = async ()=>{
    let a = Math.floor(Math.random()*20)+1;
    const response = await axios.get("https://picsum.photos/v2/list?page=10&limit="+a)
    setData(response.data)
  }

  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
    </Routes>


    {/* <div className="p-10">
      <Navbar></Navbar>
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
      </div>
    </div> */}
    </>
  );
};


export default App;
