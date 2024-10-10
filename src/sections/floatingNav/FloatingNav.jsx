import React from 'react'
import './floatingNav.css'
import floatingNavData from './floatingNavData'

const FloatingNav = () => {
  return (
    <div id="floating_nav">
      <div className="floatingNav_menu">
        {floatingNavData.map((items) => <a key={items.id} href={items.link}>{items.icon}</a>)}
      </div>
    </div>
  )
}

export default FloatingNav