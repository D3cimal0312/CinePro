import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../index.css'

const Navbar = () => {
  // const [user, setUser] = useState("Anuj Bajracharya");

  // const initials = user.trim()
  //   .split(/\s+/)
  //   .map(word => word[0].toUpperCase())
  //   .join("");

  const linkClass = ({ isActive }) =>
    `text-2xl transition-all duration-200 hover:text-white ${
      isActive
        ? "border-b border-gold text-white scale-105"
        : "text-stone hover:text-white"
    }`;

  return (
    <div className="grid grid-cols-2 items-center   px-8 md:px-20 py-6 text-white fixed z-999 bg-[#0b0d12] w-screen border-b border-[#191c1f]">

 <NavLink to="/" onClick={() => window.scrollTo(0, 0)}>
      <h1 className="text-3xl font-playfair">
        CINE<span className="text-gold">Pro</span>
      </h1>
</NavLink>

      <div className="flex gap-18 items-center justify-end">
        <NavLink to="/" onClick={() => window.scrollTo(0, 0)} className={linkClass}>Home</NavLink>
        <NavLink to="/browse" onClick={() => window.scrollTo(0, 0)} className={linkClass}>Browse</NavLink>
        <NavLink to="/about"  onClick={() => window.scrollTo(0, 0)} className={linkClass}>About</NavLink>
      </div>


      <div className="flex gap-4 justify-end items-center">
        
        {/* <div className="bg-gold text-black p-2 rounded-full font-bold w-9 h-9 flex items-center justify-center ">
          {initials}
        </div> */}
      </div>

    </div>
  );
};

export default Navbar;