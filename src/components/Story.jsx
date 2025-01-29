import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Story() {
    const [stories,setStories ]=useState([])
    useEffect(()=>{
        axios.get('https://mobile.olcha.uz/api/v2/categories').then((res)=>{
            setStories(res.data.data.categories.slice(0,10));
            // console.log(res.data.data.categories.slice(0,8));
            
        })
    },[])
  return (
    <div  className='container grid grid-cols-10  justify-center'>
        {stories.map(item=>(
            <div>
                <div className='pp border-b-7 border-t-2 border-l-4 border-r-4 rounded-full border-red-500 h-30 w-30 hover:scale-[1.05]'>
                <img width={150}  src={item.main_image} alt="" />
                </div>
                <p className='w-26 ml-5 '>{item.name_oz}</p>
            </div>
        ))}
        
    </div>
  )
}

export default Story