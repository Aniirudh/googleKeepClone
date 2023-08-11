import React from 'react'
import '../styles/Navbar.css'
import SearchBar from './SearchBar'

const Navbar = ({notes}) => {
  return (
    <div>
        <ul>
            <li ><img  src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"  alt="" className='startitem'/><span>Keep</span></li>
            <li className='enditem'><SearchBar notes={notes}/></li>
        </ul>
      
    </div>
  )
}

export default Navbar
