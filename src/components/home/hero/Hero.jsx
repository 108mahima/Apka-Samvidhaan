import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO APKA SAMVIDHAN' title='An online knowledge of Constitution ' />
            <p>Learn the Indian Constitution through interactive courses and resources.</p>
            <div className='button'>
              <button className='primary-btn'>
                 ABOUT   <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                ALL COURSES <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
