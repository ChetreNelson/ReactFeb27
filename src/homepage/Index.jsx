import React, { useState } from "react";
import { Link } from "react-router-dom";
import backgroundimage from "./backimage2.jpg";
function Index() {
  const [back, setBack] = useState("");
  const [txtcol, setTextcol] = useState("");
  const handleClick = () => {
    setBack(backgroundimage);
    setTextcol("white");
  };
  return (
    <div
      className="flex flex-col  m-0 p-0  w-full  h-screen sm:flex-row md:flex-col items-center "
      style={{ backgroundImage: `url(${back})`, color: txtcol }}
    >
      <p>hellow world</p>
      <button
        className="border border-gray-700 border-s-8 px-2 py-2 rounded-2xl"
        onClick={() => handleClick()}
      >
        ChangeBackground
      </button>
      <div className="grid grid-cols-6  sm:grid-cols-2 md:grid-cols-4 gap-1">
        <div className="  px-4 py-3 m-3 ">
          <Link to="/bgcolor">
            <button
              className="border border-gray-600 px-2 py-2 
            rounded-2xl transition duration-300 ease-in-out hover:bg-slate-800 hover:text-white
            active:bg-purple-600 active:text-white"
            >
              ColorChanger
            </button>
          </Link>
        </div>

        <div className="px-2 py-3 m-3">
          <Link to="/randomhook">
            <button
              className="border border-gray-700 px-2 py-2  
            rounded-2xl  hover:bg-slate-800 hover:text-white"
            >
              RandomNumber
            </button>
          </Link>
        </div>
        <div className="px-2 py-2 m-3">
          <Link to="/category">
            <button
              className="border border-gray-700 px-2 py-2 
            rounded-2xl hover:bg-slate-800 hover:text-white"
            >
              Recipe Categories
            </button>
          </Link>
        </div>
        <div className="px-2 py-2 m-3">
          <Link to="/counter">
            <button
              className="border border-gray-700 px-2 py-2 rounded-2xl 
             hover:bg-slate-800 hover:text-white"
            >
              Counter
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Index;
