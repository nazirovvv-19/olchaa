import React, { useEffect, useState } from "react";

import InformationCircleIcon from "../imgs/information-circle-stroke-rounded";
import ContainerTruck02Icon from "../imgs/container-truck-02-stroke-rounded";
import ShoppingBag02Icon from "../imgs/shopping-bag-02-stroke-rounded";
import InsideHeader from "./InsideHeader";
import { useParams } from "react-router";
import axios from 'axios'
function Inside() {
    const{alias} =useParams()
    const [insideOf,setInsideof ]=useState([])
   useEffect(()=>{
    axios.get('https://mobile.olcha.uz/api/v2/products/view?alias='+alias).then(res=>{
        setInsideof(res.data.data.product)
        console.log(res.data.data.product);
        
    })
   },[])
   if(!insideOf){
    return <div className="m-auto flex justify-center items-center absolute top-0 bottom-0 left-0 right-0">
    <div className="w-16 h-16 border-4  border-t-transparent rounded-full animate-spin"></div>
  </div>
   }
  return (
    <div className="mx-auto container px-6">
        <h2 className="text-4xl font-semibold mb-5">{insideOf.name_oz}</h2>
      
      <InsideHeader/>
    
      <div className="flex justify-between mt-15">
        <div>
            <img width={400} className="rounded-xl" src={insideOf.main_image} alt="" />
            {/* <p>{insideOf.name_oz}</p> */}
        </div>

        <div>
          <h2 className="text-[grey] text-lg">Doimiy xotiira hajmi</h2>
          <div>
            <button className="">512 GB</button>
            <button>256 GB</button>
            <button>1 TB</button>
          </div>
          <div className="flex gap-2">
            <img
              className="border-2 rounded-lg w-20 "
              src={insideOf.main_image}
              alt=""
            />
            <img
              className="border-2 rounded-lg w-20 "
              src={insideOf.main_image}
              alt=""
            />
             <img
              className="border-2 rounded-lg w-20 "
              src={insideOf.main_image}
              alt=""
            />
             <img
              className="border-2 rounded-lg w-20 "
              src={insideOf.main_image}
              alt=""
            />
          </div>
          <div className="mt-5 text-xl flex flex-col gap-2">
            <div>
              <span className="opacity-50">Nomi </span>
              <span>___________________________ {insideOf.name_oz}</span>
            </div>
            <div>
              <span className="opacity-50">Vazni </span>
              <span>____________________________ 222g </span>
            </div>
            <div>
              <span className="opacity-50">Face ID Datchigi</span>
              <span>__________________iOS 17</span>
            </div>
            <div>
              <span className="opacity-50">Rangi</span>
              <span>____________________________ Natural titanium</span>
            </div>
            <div>
              <span className="opacity-50">Rangi</span>
              <span>____________________________ blue </span>
            </div>
            <div>
              <span className="opacity-50">Namlikdan chimoya</span>
              <span>_____________ Mavjud, IP68</span>
            </div>
            <div>
              <span className="opacity-50">sdnfshj </span>
              <span>__________________________sfsdfsd </span>
            </div>
          </div>
        </div>
        <div className="border-2 p-4 rounded-2xl">
          <p className="font-bold text-xl mt-5">{insideOf.discount_price} so'm</p>
          <div className="flex gap-20 opacity-50 text-xs mt-2 mb-2">
            <p >Yetkazib berish to'g'risida ma'lumot:</p>
            <InformationCircleIcon />
          </div>
          <div className="flex gap-5 ">
            <ContainerTruck02Icon />
            <p className="font-bold">Standart yetkazib berish</p>
          </div>
          <p className="w-55 ml-11 mb-12 ">Manzilga qarab 4 soatdan 2 ish kunigacha yetkazib beriladi</p>
          <hr />
      <div className="flex flex-col">
          <div className="flex gap-5 border-2 mt-5 p-2 rounded-xl pl-20 bg-green-400 border-green-400 text-white mx-auto w-full">
          <ShoppingBag02Icon/>
          <p>Savatchaga qoshish</p>
          </div>
          <button className="border-2 p-2 mt-2 rounded-xl font-bold">bir klikda sotib olish</button>
      </div>
      <p className="font-bold text-xl mt-6">AmirGROUP</p>
        </div>
      </div>
    </div>
  );
}

export default Inside;
