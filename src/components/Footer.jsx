import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="bg-black grid grid-cols-3 text-center py-12 text-white border-t-2 border-gray-500">
        <div id="logo_nav " className='text-3xl '>
            <h1>CINE<span className='text-[#d4a844]'>Pro</span></h1>
            <p className='text-[12px] text-stone px-12'> CinePro was built with one belief — great films should be accessible to everyone, everywhere, for free.CinePro was built with one belief — great films should be accessible to everyone, everywhere, for free.CinePro was built with one belief — great films should be accessible to everyone, everywhere, for free.CinePro was built with one belief — great films should be accessible to everyone, everywhere, for free.</p>
        </div>
        <div className='flex justify-between flex-col gap-8 font-bold text-xl'>
        <NavLink to="/" onClick={() => window.scrollTo(0, 0)} >Home</NavLink>
        <NavLink to="/browse" onClick={() => window.scrollTo(0, 0)} >Browse</NavLink>
        <NavLink to="/about"  onClick={() => window.scrollTo(0, 0)} >About</NavLink>
            <div>Contact</div>


        </div>
        <div>
            <p>@2026 CinePro</p>

            <p className='text-gold'>Jay Nepal</p>

        </div>
</div>
  )
}

export default Footer