import { useState } from "react";
import reactLogo from "./assets/react.svg";
import img from "./assets/image.png";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="flex justify-center flex-col items-center">
        <div className="w-40 flex justify-center align-middle border-2 border-indigo-600">
          {/* <button className={`${toggle ? "blue" : "black"}`}>toggle</button> */}
          <button
            className={`p-2 rounded ${
              toggle ? "bg-blue-500 text-white" : "bg-black text-white"
            }`}
            onClick={() => setToggle(!toggle)}
          >
            toggle
          </button>
        </div>
        <div className="flex items-center">
          <div
            className={`max-w-xs rounded-2xl flex flex-col justify-center items-center ${
              toggle ? "bg-gray-800 text-white" : "bg-white text-gray-800"
            }`}
          >
            <img src={img} alt="" className="w-56 h-56 object-contain" />
            <h5 className="text-sm font-medium mb-2 p-2">
              Asian Men's Mexico-02 Casual Sneaker Shoes
            </h5>
            <div className="flex items-center m-4">
              <span className="text-yellow-400">★★★★★</span>
              <span className="text-sm">4.8</span>
            </div>
            <div className="flex mb-5">
              <h1 className="">4,676</h1>
              <button className="border-1 ml-20 p-1">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
