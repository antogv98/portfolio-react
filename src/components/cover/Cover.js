import React from 'react'
import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4"

const Cover = () => {
  return (
    <div className='cover-container'>
        <video className='video' src={coverVideo} autoPlay loop muted></video>
        <h1>Antonio Gutiérrez Villegas</h1>
        <p>Desarrollador Full-Stack Web y Mobile</p>
    </div>
  )
}

export default Cover