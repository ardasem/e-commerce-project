import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav className="flex flex-row gap-[15px] font-['Montserrat'] font-bold text-md-grey text-[14px] leading-[24px] m-[16.5px] tracking-wide">
        <Link exact to='/'>Home</Link>
        <Link exact to='/shop'>Shop</Link>
        <Link exact to='/about'>About</Link>
        <Link exact to='/blog'>Blog</Link>
        <Link exact to='/contact'>Contact</Link>
        <Link exact to='/pages'>Pages</Link>
    </nav>
  )
}

export default Navbar