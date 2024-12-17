import React from 'react'
import { FaGithub ,FaLinkedin, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
        <div className='footer'>
            <p> &copy ; 2024 Monisha M . All Rights Reserved.</p>
            <ul className='footer-links'>
                <li>
                    <a href="https://github.com/monisha-76" target="_blank" rel="noopener noreferrer">  
                    <FaGithub className="footer-icon" /> 
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/monisha-m-it-0699732b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="footer-icon" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/itzz___isha___11/profilecard/?igsh=MWw4N2FsZmNwaDY1NA==" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="footer-icon" />
                    </a>
                </li>

            </ul>
        </div>
    </footer>
  )
}

export default Footer