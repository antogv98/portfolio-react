import React from 'react'
import "./About.css"
import sobremi from "../../media/sobremi.png"

const About = () => {
  return (
    <div className='about-container'>
        <div className='about-desc'>
            <h3>Dejame que te cuente algo sobre mi</h3>
            <p>Soy graduado en Ingeniería Informática por la Universidad de Almería, tengo conocimiento de programación en varios lenguajes como son javascript, java y c entre otros. Además tengo conocimientos sobre diseño web y gestión de redes. Me considero una persona trabajadora y autodidacta en lo que se refiere a la adquisición de nuevos conocimientos, también creo que soy agradable y coopero bien con compañeros.
            </p>
            
        </div>
        <div className='about-img'>
            <img src={sobremi} alt="about"></img>
        </div>
    </div>
  )
}

export default About