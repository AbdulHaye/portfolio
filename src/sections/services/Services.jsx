import React from 'react'
import './services.css'
import Card from '../../components/Card'
import serviceData from './serviceData';

const Services = () => {
  return (
    <section id="services">
      <h2>My Services</h2>
      <p>I give the best services that are bellow</p>
      <div className="container services_container">
        {
          serviceData.map((items) => (
            <Card key={items.id} className='services light'>
              <div className='services-icon'>{items.icon}</div>
              <div className="services_detail">
                <h4>{items.title}</h4>
                <p>{items.desc}</p>
              </div>
            </Card>
          ))
        }
      </div>
    </section >
  )
}

export default Services