import React, { useRef, useState } from "react";
import { X, Download } from "lucide-react";

function Model({onClose}) {
    const modelref  = useRef();
    const closeModel = (e)=>{
        if(modelref.current===e.target){
            onClose();
        }
    }

  return (
    <div ref={modelref} onClick={closeModel} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="mt-10 flex flex-col gap-2.5 text-white">
        <button onClick={onClose} className="place-self-end">
          <X size={30}></X>
        </button>
        <div className="bg-indigo-700 rounded-xl px-10 py-10 flex flex-col gap-5 items-center mx-4 font-semibold border-white border-2">
          <h1 className="text-3xl font-extrabold">Download FREE EBOOK</h1>
          <p className="text-3xl font-bold max-w-md text-center">
            Want to Learn How to Crack Web Development Interviews Like a Pro!
          </p>
          <form>
            <input
              type="email"
              placeholder="Enter Your Email"
              required
              className="px-5 py-3 w-full text-black border-gray-300 rounded-md "
            />
          </form>
          <button className="flex gap-2 bg-black px-7 py-3 rounded-xl" type="submit">
            <Download />
            Download the Ebook
          </button>
        </div>
      </div>
    </div>
  );
}

export default Model;
