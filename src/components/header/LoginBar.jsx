import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping,faUser,faMagnifyingGlass,faHeart } from '@fortawesome/free-solid-svg-icons'

function LoginBar() {
  return (
    <div className='flex flex-row gap-4 text-light-blue font-monsterrat font-bold'>
        <div className='flex flex-row gap-3 items-center'>
        <FontAwesomeIcon icon={faUser} color='#23A6F0'/>
        <p>Login/Register</p>
        </div>

        <div className='flex flex-row items-center'>
        <FontAwesomeIcon icon={faMagnifyingGlass} color='#23A6F0'/>
        </div>

        <div className='flex flex-row gap-1 items-center font-normal'>
        <FontAwesomeIcon icon={faCartShopping} color='#23A6F0'/>
        <p>1</p>
        </div>     

        <div className='flex flex-row gap-1 items-center font-normal'>
        <FontAwesomeIcon icon={faHeart} color='#23A6F0'/>
        <p>1</p>
        </div>
    </div>
  )
}

export default LoginBar