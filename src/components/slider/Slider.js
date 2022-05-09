import React from 'react'
import "./Slider.css"
import Carousel,{slidesToShowPlugin} from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"
import Slides from './Slides'


const Slider = () => {
  return (
    <div className='carousel-container'>
        <div className='carousel-title'>
            <h2>Mis Proyectos</h2>
        </div>
        <Carousel 
        plugins={[
            'arrows',
            'infinite',
            'centered',
            { resolve: slidesToShowPlugin,options: {
                numberOfSlides: 3
               }}
        ]}
        
        slidesPerPage={3}
        animationSpeed={200}
        offset={50}
        itemWidth={400}
        slides={Slides}
        breakpoints={{
          960:{
            
            plugins: [
              'infinite',
            'centered',
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 1,
                 
                },
              },
            ],
            itemWidth:250,
          }
        }}
        ></Carousel>
    </div>
  )
}

export default Slider