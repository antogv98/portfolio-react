import React from 'react'
import './Footer.css';
import pdf from '../../media/CurriculumAntonio.pdf';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-info'>
            <h1>Antonio Gutiérrez Villegas</h1>
            <p>Empecemos a crear</p>
        </div>
        <div className='footer-contact'>
            <h3>Contactemos</h3>
            <p>Este puede ser el comienzo de algo grande</p>
        </div>

        <div className='footer-download'>
            <a href={pdf} target="_blank" rel="noopener noreferrer" download>Descarga mi CV</a>
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