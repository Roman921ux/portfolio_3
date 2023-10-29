import React from 'react'

function Footer() {
  return (
    <footer className='footer'>
        <div className="footer__flex-text">
            <div className="footer__left-text">2023 - Made by Djectstudio</div>
            <div className="footer__nav">
                <ul className="footer__list">
                    <li className="footer__item">
                        <a href="#" className="footer__link">Dribbble</a>
                    </li>
                    <li className="footer__item">
                        <a href="#" className="footer__link">Instagram</a>
                    </li>
                    <li className="footer__item">
                        <a href="#" className="footer__link">Linkedin</a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer