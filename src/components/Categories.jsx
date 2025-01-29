import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ShoppingCart02Icon from '../imgs/shopping-cart-02-stroke-rounded'
// import ShoppingCart02Icon from '../imgs/shopping-cart-02-stroke-rounded'
import FavouriteIcon from '../imgs/Heartt'
import heartWhite from '../assets/heartWhite.svg'
import redHeart from '../assets/redHeart.svg'
import { Link } from 'react-router'
function Categories() {
    const [product,setProduct]=useState([])
    useEffect(()=>{
        axios.get('https://mobile.olcha.uz/api/v2/products?is_sale=true').then(res=>{
            setProduct(res.data.data.products);
            // console.log(res.data.data.products);
            
            
        })
    },[])
    const[isLiked,setLiked]=useState([])
    const submit = (index)=>{
       const liked = [...isLiked]
       liked[index]=!liked[index]
       setLiked(liked)
      }
  return (
    <div className='container'>
        <div className='flex flex-wrap gap-3 grid-cols-5 mt-15 '> 
            {product.map((item,index)=>(
                <div className='w-70 p-5 relative  '>
                  <Link to={`/inside/${item.alias}`}>
                  <img width={250} className='rounded-2xl  ' src={item.main_image} alt="" />
                  </Link>
                  <p>{item.name}</p>
                  <p className='font-bold text-xl mt-8 mb-2'>{item.total_price} so'm</p>
                  <p className='text-sm font-bold bg-yellow-300 w-40 px-2 py-1 rounded-md'>{item.monthly_repayment} so'm x 12 oy </p>
                  <div className='flex items-center gap-1 mt-5'>
                  <button className='border-2 p-2 rounded-md hover:bg-gray-300'> 
                    <ShoppingCart02Icon/>
                  </button>
            
                  
                  <button className='px-8 border-2 border-red-500 py-2 rounded-md hover:bg-red-100'>Muddatli to'lov</button>
                  <img className='absolute top-8 ml-50 z-10 ' onClick={()=>submit(index)} width={20} src={isLiked[index]?redHeart :heartWhite} alt="" />
                  </div>
                </div>  
            ))}
        </div>
    </div>
  )
}

export default Categories