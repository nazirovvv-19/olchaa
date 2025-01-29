import React from "react";
import Navbar from "./Navbar";
import Story from "./Story";
import ThreeImgs from "./ThreeImgs";
import Categories from "./Categories";
import Inside from "./Inside";

function Header() {
  return (
    <div>
      <div className="bg-red-600 p-4">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="w-135 flex justify-between items-center ">
              <p className="pp text-red-500  px-3 py-1 rounded-xl bg-white border-transparent border-2 hover:bg-transparent hover:text-white  hover:border-white font-semibold">
                0% Muddatli tolov
              </p>
              <p className="pp text-white px-3 py-1 rounded-xl border-2 border-white hover:bg-white font-semibold  hover:text-red-500">
                Chegirmalar
              </p>
              <p className="pp text-red-500  px-3 py-1 rounded-xl bg-white border-transparent border-2 hover:bg-transparent hover:text-white  hover:border-white font-semibold">
                Yutuqlli oyinlar{" "}
              </p>
              <p className="pp text-white px-3 py-1 hover:text-red-300 ">
                Sayt haritasi
              </p>
            </div>
            <div className="flex w-120 justify-between items-center">
              <a
                className="pp font-bold text-white hover:text-red-400 text-xl "
                href=""
              >
                +998 71 202 20 21
              </a>
              <p className="pp border-2 border-white px-3 py-1 rounded-xl hover:text-red-600 text-white font-semibold hover:bg-white">
                olcha da soting
              </p>
              <div className="flex w-30 justify-between text-white">
                <p>UZ</p>
                <p>УЗ</p>
                <p>EN</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navbar/>
      <Story/>
      <ThreeImgs/>
      <Categories/>
      {/* <Inside/> */}
    </div>
  );
}

export default Header;
