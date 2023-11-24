import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav className='flex flex-row gap-2 font-monsterrat font-bold text-grey text-[14px]'>
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