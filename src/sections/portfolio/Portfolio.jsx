import React from 'react'
import './portfolio.css'
import portfolioData from './portfolioData'
import Card from '../../components/Card'
import Tooltip from '@mui/material/Tooltip'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Recent Projects</h2>
      <p>Check out some of the projects that i have recently completed</p>
      <div className="container portfolio_container">
        {portfolioData
          .sort((a, b) => b.id - a.id)
          .map((items) => {
            const maxLength = 100;
            const truncatedDesc =
              items.desc.length > maxLength
                ? `${items.desc.substring(0, maxLength)}...`
                : items.desc;

            return (
              <Card key={items.id} className="portfolio_card">
                <div>
                  <img className="imgContainer" src={items.img} alt="portfolio" />
                </div>
                <h4>{items.title}</h4>
                <Tooltip title={items.desc} placement="top">
                  <p title={items.desc} className='cards-description'>{truncatedDesc}</p>
                </Tooltip>

                <div className="portfolio_btns">
                  <a href={items.demoLink} className="btn light sm" target="_blank" rel="noreferrer">
                    Demo
                  </a>
                  {/* <a href={items.githubLink} className="btn primary sm" target="_blank" rel="noreferrer">
                    Github
                  </a> */}
                </div>
              </Card>
            );
          })}
      </div>
    </section>
  )
}

export default Portfolio