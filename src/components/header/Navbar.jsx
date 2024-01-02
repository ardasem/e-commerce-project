import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav className="flex flex-col md:flex-row gap-[15px] font-['Montserrat'] font-bold text-md-grey text-[14px] leading-[24px] m-[16.5px] tracking-wide">
        <Link to='/'>Home</Link>
        <Link to='/shop'>Shop</Link>
        <Link to='/about'>About</Link>
        <Link to='/blog'>Blog</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/pages'>Pages</Link>
    </nav>
  )
}

export default Navbar