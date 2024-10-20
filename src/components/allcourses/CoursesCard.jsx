import React from "react"
import "./courses.css"
import { coursesCard } from "../../dummydata"
import { Link } from 'react-router-dom';


const CoursesCard = () => {
  return (
    <>
      <section className='coursesCard'>
        <div className='container grid2'>
          {coursesCard.map((val) => (
            <div className='items'>
            <Link to={val.returnpath} style={{ textDecoration: 'none' }}>
              <div className='content flex'>
                <div className='left'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                </div>
                <div className='text'>
                  <h1>{val.coursesName}</h1>
                  
                  <div className='details'>
                    {val.courTeacher.map((details) => (
                      <>
                        <span>{details.totalTime}</span>
                      </>
                    ))}
                  </div>
                </div>
              </div>
              <div className='price'>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default CoursesCard
