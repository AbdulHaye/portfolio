import React from 'react'
// import headerImage from "../../assets/header.jpeg"
import './header.css'
import headerData from './headerData'

const Header = () => {
  return (
    <header id="header">
      <div className="container header_container">
        <div>
          <img className="header_profile" src="https://ca.slack-edge.com/T0107209R62-U0104S1CRTP-9b022361562a-512" alt="Header" />
        </div>
        <h3>Abdul Haye</h3>
        <p className='header_paragraph'>Hi, I'm a dedicated Software Engineer specializing in full-stack development. I excel in integrating complex APIs, ensuring seamless data flow between systems, and optimizing both VPS and shared server deployments. With a strong background in maintaining high-quality web applications and delivering robust, scalable solutions, I’m passionate about creating innovative software that meets diverse client needs.</p>
        <div className="header_btns">
          <a href="#contact" className='btn light'>Let's Talk</a>
          <a href="#portfolio" className='btn primary'>My Work</a>
        </div>
        <div className="header_socials">
          {headerData.map((items) => <a key={items.id} href={items.link} target='_blank' rel="noreferrer">{items.icon}</a>)}
        </div>
      </div>
    </header>
  )
}

export default Header