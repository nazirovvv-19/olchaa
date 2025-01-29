import React, { useState } from "react";
import BarsIcon from '../BarsIcon'
import Cancel01Icon from "../imgs/cancel-01-stroke-rounded";
// import React from "react";

function Catalog() {
 
    const[catalogOpening,setCatalogOpening]=useState(false)
    const categories = [
      { icon: "❄️", name: "Qishki savdo" },
      { icon: "💰", name: "Har kuni foyda" },
      { icon: "🔔", name: "Tugatish" },
      { icon: "⭐", name: "Hafta tovarlari" },
      { icon: "🎧", name: "Elektronika" },
      { icon: "🏠", name: "Maishiy texnika" },
      { icon: "👗", name: "Kiyim" },
      { icon: "👟", name: "Poyabzallar" },
      { icon: "👜", name: "Aksessuarlar" },
      { icon: "💄", name: "Go'zallik va parvarish" },
      { icon: "🩺", name: "Salomatlik" },
      { icon: "🏡", name: "Uy-ro‘zg‘or buyumlari" },
    ];
  
    const electronics = [
      {
        title: "Smartfonlar va telefonlar",
        items: [
          "Smartfonlar uchun aksessuarlar",
          "Smartfonlar",
          "Knopkali telefonlar",
          "Ehtiyot qismlar va ta'mirlash",
          "Stasionar telefonlar",
        ],
      },
      {
        title: "Kompyuter texnikasi",
        items: [
          "Kompyuter aksessuarlar",
          "Kompyuter texnikalari uchun butlovchi qismlar",
          "Kompyuterning tashqi qurilmalari",
          "Ma'lumotlarni saqlash",
        ],
      },
    ];
    const open =()=>{
      setCatalogOpening((prev)=>!prev)
    }
  return (
    <div >
      
      <div onClick={open} className="pp flex  items-center gap-4 border-2 py-2 px-4 rounded-xl hover:border-red-500 hover:text-red-500  ">
        {!catalogOpening?<BarsIcon />:<Cancel01Icon/>}
        <p className="text-xl ">Katalog</p>
      </div>
      {catalogOpening&&(
        <div className="container">
             <div style={{ display: "flex",position:'absolute', left:10, top:190, backgroundColor:"white", width:'100%', zIndex:155 }}>
                <div style={{ width: "250px", backgroundColor: "#F5F5F5", padding: "10px" }}>
                  {categories.map((category, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "10px 5px",
                        cursor: "pointer",
                        // flexDirection:"column"
                        
                      }}
                    >
                      <span style={{ fontSize: "20px", marginRight: "10px" }}>{category.icon}</span>
                      <p style={{ margin: 0 }}>{category.name}</p>
                    </div>
                  ))}
                </div>
                <div style={{ padding: "20px" }}>
                  <h2>Elektronika</h2>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "50px" }}>
                    {electronics.map((category, index) => (
                      <div key={index} style={{ width: "600px" }}>
                        <h3>{category.title}</h3>
                        <ul style={{ listStyle: "none", padding: 0,  }}>
                          {category.items.map((item, idx) => (
                            <li key={idx} style={{ marginBottom: "5px" }}>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
        </div>
      )}
    </div>
  )
}

export default Catalog;



 

