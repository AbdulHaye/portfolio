import React from 'react'
import './navbar.css'
import navData from './navData';
import logo from "../../assets/logo.jpeg"

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="container nav_container">
          <img src={logo} alt='Logo' className='nav_logo' />
          <ul className="nav_menu">
            {navData.map((items) => <li key={items.id}><a href={items.link}>{items.title}</a></li>)}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar