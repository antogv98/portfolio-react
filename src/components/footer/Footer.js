import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-info'>
            <h1>Antonio Gutiérrez Villegas</h1>
            <p>Based in Your City</p>
        </div>
        <div className='footer-contact'>
            <h3>Contactemos</h3>
            <p>Y manos a la obra!</p>
        </div>
        <div className='footer-sns'>
            <div className='design-by'>
                Desing By: Antonio Gutiérrez Villegas
            </div>
            <div className='sns-links'>
                <a href='https://www.linkedin.com/in/antonio-guti%C3%A9rrez-villegas-89578b161/' target="_blank" rel="noreferrer">
                    <i className='fab fa-linkedin linkedin'></i>
                </a>
                <a href='https://api.whatsapp.com/send?phone=34610658841' target="_blank" rel="noreferrer">
                    <i className='fab fa-whatsapp whatsapp'></i>
                </a>
                <p className='mail'>antogv98@gmail.com</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer