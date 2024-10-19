import React from "react"
import Back from "../common/back/Back"
import TeamCard from "../team/TeamCard"
import Awrapper from "../about/Awrapper"
import "../about/about.css"
import Sidebar from "./Sidebar"
import Quiz from "./quiz"

const Module = () => {
  return (
    <>
      <Back title='Team' />
      
        <div class="flex">
      <Sidebar/>
        <div className='container'>
        <>
        <Quiz/>
        </>
        </div>
        </div>
      <Awrapper />
    </>
  )
}

export default Module
