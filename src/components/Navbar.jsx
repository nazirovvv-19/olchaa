import React from 'react'
import olchaLogo from '../assets/olchaLogo.png'
import search from '../assets/search.svg'
import Analytics03Icon from '../imgs/Analy'
import FavouriteIcon from '../imgs/Heartt'
import ShoppingCart02Icon from '../imgs/shopping-cart-02-stroke-rounded'
import UserIcon from '../imgs/user-stroke-rounded'
import Main from './Main'
import Catalog from './Catalog'



function Navbar() {
  return (
    <div className='container p-4 '>
        <div className='flex mt-6 justify-between items-center '>
            <img width={100} src={olchaLogo} alt="" />
            <Catalog/>
            <div className='flex gap-4 items-center bg-gray-100 w-170 justify-between p-2 rounded-2xl'>
                <input type="text"  placeholder='Katalog boyicha qidirish' className='outline-0 px-4' />
                <div className='bg-red-600 py-2 px-5 rounded-xl '>
                <img  width={25}  src={search} alt="" />
                </div>
            </div>
            <div className='flex justify-between w-90'>
                <div className='pp flex flex-col items-center hover:text-red-500'>
                    <Analytics03Icon/>
                    <p>Taqqoslash</p>
                </div>
                <div className='pp flex flex-col items-center hover:text-red-500'>
                    <FavouriteIcon/>
                    <p>Sevimlilar</p>
                </div>
                <div className='pp flex flex-col items-center hover:text-red-500'>
                    <ShoppingCart02Icon/>
                    <p>Savatcha</p>
                </div>
                <div className='pp flex flex-col items-center hover:text-red-500'>
                    <UserIcon/>
                    <p>Kirish</p>
                </div>
            </div>
            
        </div>
        <Main/>
    </div>
  )
}

export default Navbar