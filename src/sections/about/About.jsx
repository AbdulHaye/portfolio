import React from 'react'
import './about.css'
import aboutData from './aboutData';
import Card from '../../components/Card'

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_right">
          <div className="about_cards">
            {
              aboutData.map((items) => (
                <Card key={items.id} className='about_card'>
                  <span className='about_card-icon'>{items.icon}</span>
                  <h5>{items.title}</h5>
                  <small>{items.desc}</small>
                </Card>
              ))
            }
          </div>
          <p>I’m a passionate Software Engineer with a strong focus on full-stack development, specializing in JavaScript technologies. With extensive experience in both frontend and backend development, I create dynamic and user-centric applications. My expertise includes leveraging modern frameworks like React, Next.js, high-performance frontend solutions, while also utilizing Node.js, Express, and Laravel to build robust and scalable backends.
          </p>
          <p className='para-margin'>I thrive on integrating complex APIs to connect various systems, ensuring seamless data exchange and communication. My skills extend to VPS and shared server deployments, where I manage server configurations and optimize performance for reliable application hosting.</p>

          <p className='para-margin'>
            Driven by a commitment to excellence, I continuously seek to refine my skills and deliver innovative solutions that address real-world challenges. My approach is characterized by meticulous attention to detail, a passion for problem-solving, and a dedication to delivering high-quality projects that exceed client expectations.

          </p>
        </div>
      </div>
    </section>
  )
}

export default About