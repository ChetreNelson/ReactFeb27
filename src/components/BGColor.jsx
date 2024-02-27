import React, { useState } from "react";

const BGColor = () => {
  const [color, setColor] = useState("violet");
  return (
    <div className="w-full h-screen " style={{ backgroundColor: color }}>
      {/* position */}
      <div
        className="fixed flex flex-wrap justify-center
       top-4 inset-x-2 px-2"
      >
        {/* bar */}
        <div
          className="flex flex-wrap justify-center gap-3
         bg-white rounded-3xl px-3 py-2 shadow-lg "
        >
          {/* buttons */}
          <button
            className="outline-none px-4 py-1 bg-red-600 
          rounded-3xl text-white"
            onClick={() => {
              setColor("red");
            }}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 bg-green-600 
          rounded-3xl text-white"
            onClick={() => {
              setColor("green");
            }}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-1 bg-yellow-300 
          rounded-3xl text-white"
            onClick={() => {
              setColor("yellow");
            }}
          >
            Yellow
          </button>
          <button
            className="outline-none px-4 py-1 bg-blue-600 
          rounded-3xl text-white"
            onClick={() => {
              setColor("blue");
            }}
          >
            Blue
          </button>
          <button
            className="outline px-4 py-1 bg-white-600 
          rounded-3xl text-black"
            onClick={() => {
              setColor("white");
            }}
          >
            White
          </button>
          <button
            className="outline-none px-4 py-1 bg-pink-600 
          rounded-3xl text-white"
            onClick={() => {
              setColor("pink");
            }}
          >
            Pink
          </button>
        </div>
      </div>
    </div>
  );
};

export default BGColor;
