import React from "react"
import Back from "../common/back/Back"
import TeamCard from "../team/TeamCard"
import "../team/team.css"
import Awrapper from "../about/Awrapper"
import "../about/about.css"

const Module = () => {
  return (
    <>
      <Back title='Team' />
      <section className='team padding'>
        <div className='container grid'>
          <TeamCard />
        </div>
      </section>
      <Awrapper />
    </>
  )
}

export default Module
