import React, { useState } from 'react'
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import logo from "../assets/logo.png"

//https://www.youtube.com/watch?v=DBMPXJJfQEA&t=1484s

function Navbar() {

  const [menu,setMenu] = useState("home");
  
  return (
    <div className='py-5 px-0 flex justify-between items-center'>
        <img src={logo} alt='logo' className='w-36'/>

        <ul className="flex list-none gap-5 text-[#49557e] text-lg">
            <li onClick={()=>setMenu("home")} className={`cursor-pointer ${menu==="home"?"pb-[1px] border-b-2 border-b-[#49557e]":""}`}>home</li>
            <li onClick={()=>setMenu("menu")} className={`cursor-pointer ${menu==="menu"?"pb-[1px] border-b-2 border-b-[#49557e]":""}`}>menu</li>
            <li onClick={()=>setMenu("mobile-app")} className={`cursor-pointer ${menu==="mobile-app"?"pb-[1px] border-b-2 border-b-[#49557e]":""}`}>mobile-app</li>
            <li onClick={()=>setMenu("contactUs")} className={`cursor-pointer ${menu==="contactUs"?"pb-[1px] border-b-2 border-b-[#49557e]":""}`}>contactUs</li>
        </ul>

        <div className="flex items-center gap-10">
            <FaSearch size={20} color="gray" />
            <div className="relative">
                <FaShoppingCart size={25} color="gray" />
                <div className="absolute min-w-3"></div>
            </div>
            <button className='bg-transparent text-base text-[#49557e] border border-[tomato] px-8 py-2 rounded-[50px] cursor-pointer hover:bg-[#e2ccc8] transition duration-300'>signIn</button>
        </div>
    </div>
  )
}

export default Navbar