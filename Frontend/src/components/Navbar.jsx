import React from 'react'
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import logo from "../assets/logo.png"

function Navbar() {
  return (
    <div className='py-5 px-0 flex justify-between items-center'>
        <img src={logo} alt='logo' className='w-36'/>

        <ul className="flex list-none gap-5 text-[#49557e] text-lg">
            <li>home</li>
            <li>menu</li>
            <li>mobile-app</li>
            <li>contactUs</li>
        </ul>

        <div className="flex items-center gap-10">
            <FaSearch size={20} color="gray" />
            <div className="nav-search-icon">
                <FaShoppingCart size={25} color="gray" />
                <div className="dot"></div>
            </div>
            <button className='bg-transparent text-base text-[#49557e] border border-[tomato] px-8 py-2 rounded-[50px] cursor-pointer hover:bg-[#e2ccc8] transition duration-300'>signIn</button>
        </div>
    </div>
  )
}

export default Navbar