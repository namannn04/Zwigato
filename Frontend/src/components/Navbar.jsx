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

        <div className="nav-right">
            <FaSearch size={20} color="gray" />
            <div className="nav-search-icon">
                <FaShoppingCart size={25} color="gray" />
                <div className="dot"></div>
            </div>
            <button>signIn</button>
        </div>
    </div>
  )
}

export default Navbar