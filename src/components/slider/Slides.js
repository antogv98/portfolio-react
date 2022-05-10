import React from "react";
import "./Slider.css"

const slidesInfo=[
    {
        src:"https://i.ibb.co/qRHvYns/Screenshot-2022-05-10-09-25-25-676-io-qrscanner-Acacias-Dev.jpg",
        alt:"Lector de QR con historial en Ionic",
        desc:"Lector de QR con historial en Ionic",
        href:"https://github.com/antogv98/06-qrscanner"
    }, {
        src:"https://i.ibb.co/QrbWvNk/Sin-ti-tulo.png",
        alt:"Web portfolio en con HTML, CSS y JS",
        desc:"Web portfolio en con HTML, CSS y JS",
        href:"http://www.antoniogutierrez.es/?i=1"
    }, {
        src:"https://i.ibb.co/ZVSh66n/Mapa.jpg",
        alt:"App de automatización de mensajes mendiante GPS",
        desc:"App de automatización de mensajes mendiante GPS",
        href:"https://github.com/antogv98/10-prototipoTFG"
    },
]


const slides=slidesInfo.map(slide=>(
    <a target='_blank' href={slide.href} rel="noreferrer">
        <div className="slide-container">
        <img src={slide.src} alt={slide.alt}></img>
        <div className="slide-desc">
            <span>{slide.desc}</span>
        </div>
    </div>
    </a>
    
))

export default slides;