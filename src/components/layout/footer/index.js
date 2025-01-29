import React from 'react'
import { Footer, FooterContent,  LinksContainer, LogoAndSocial, Credits} from './style'
import { Link } from 'react-router-dom'

import {FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa'

export default function index() {
  return (
    <Footer>
      <FooterContent>

        <LinksContainer>
            <div>

              <li><Link to={'/'}>About us</Link></li>
              <li><Link to={'/'}>Contact us</Link></li>
              <li><Link to={'/'}>Help/FAQ</Link></li>

            </div>

            <div>
              
              <li><Link to={'/'}>Support & Bugs</Link></li>
              <li><Link to={'/'}>Feature Request</Link></li>
              <li><Link to={'/'}>Company</Link></li>

            </div>

            <div>
              
              <li><Link to={'/'}>Privacy Policy</Link></li>
              <li><Link to={'/'}>Cookies Policy</Link></li>
              <li><Link to={'/'}>Terms of Use</Link></li>

            </div>
        </LinksContainer>
          
        <LogoAndSocial>
          <h2 className='logo'><Link to='/'>Free to Fun</Link></h2>

          <div>

            <a href='https://github.com/ArthurBDias' target='_blank' rel='noreferrer'><FaGithub/></a>
            <a href='https://github.com/ArthurBDias' target='_blank' rel='noreferrer'><FaLinkedin/></a>
            <a href='https://github.com/ArthurBDias' target='_blank' rel='noreferrer'><FaInstagram/></a>

          </div>

        </LogoAndSocial>

      </FooterContent>

      <Credits>
        <p>© All data used in the project refer to the Free to Game API</p>
      </Credits>
    </Footer>
  )
}
