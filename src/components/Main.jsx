import React, { useEffect, useState } from "react";
import axios from "axios";
import Timer from "./Timer";

function Main() {
  const [slider, setSlider] = useState([]);
  const [counter, setCounter] = useState(0);
  const [dayProduct, setDayProduct] = useState([]);

  useEffect(() => {
    axios
      .get("https://mobile.olcha.uz/api/v2/extra/sliders")
      .then((res) => {setSlider(res.data.data.sliders)
        console.log(res.data.data.sliders);
        
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://mobile.olcha.uz/api/v2/product-of-the-day")
      .then((res) => {setDayProduct(res.data.data.products[0])
    //   console.log(res.data.data.data[1]);
      
    })
    //   .then(res=>console.log(res.data));
      
  },[]);
  const next = () => {
    setCounter((prev) => (prev + 1) % slider.length);
  };

  const back = () => {
    setCounter((prev) => (prev - 1 + slider.length) % slider.length);
  };

  if (!slider.length) {
    return <div>Loading...</div>;
  }
  if (!dayProduct) {
    return <div>loading....</div>
  }

  return (
    <div className="container">
      <div className="flex mt-15 justify-between">
        <div className="carousel relative">
          <button
            className="bg-gray-300 w-10 h-10 rounded-[50%] border-none font-bold text-xl pb-1 absolute top-43 left-5 z-10"
            onClick={back}
          >
            {"<"}
          </button>
          <div className="carousel-item">
            <img
              className=" rounded-2xl"
              src={slider[counter].image_oz}
              alt={`Slider ${counter}`}
            />
          </div>
          <button
            className="bg-gray-300 w-10 h-10 rounded-[50%] border-none font-bold text-xl pb-1 absolute top-43 right-5 z-10"
            onClick={next}
          >
            {">"}
          </button>
        </div>
        <div className="border-4 border-red-500 w-70 rounded-2xl p-3">
            <div className="flex justify-between">
                <p>Kun maxsuloti</p>
               <Timer/>

            </div>
            <img width={300} src={dayProduct.main_image} alt="" />
            <p>{dayProduct.name_oz}</p>
            <h3 className="font-bold text-lg">{dayProduct.discount_price} so'm</h3>
            <p className="bg-yellow-300 w-44 py-1 rounded-md px-2">{dayProduct.monthly_repayment} so'm x 12 oy</p>
        </div>
      </div>
    </div>
  );
}

export default Main;
