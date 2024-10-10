import React from 'react'
import './contact.css'
import contactData from './contactData'
import contact from '../../assets/contact.jpg'

const Contact = () => {
  return (
    <section id="contact">
      <div className="container contact_container">

        <div className="left_side">
          <h2>Get In Touch</h2>
          <p>Shoot me a message via any of links bellow</p>
          <div className="contact_socials">
            {contactData.map((items) => <a key={items.id} href={items.link} target='_blank' rel="noreferrer">{items.icon}</a>)}
          </div>
        </div>

        <div className="right_side">
          <img className='contact_image' src={contact} alt="contact" />
        </div>
      </div>
    </section>
  )
}

export default Contact