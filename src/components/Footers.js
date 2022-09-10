import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

class Footers extends React.Component{
    render(){
        return(
            <footer>
                <div className='wrapper footer-content'>
                    <nav>
                        <p>Sales</p>
                        <ul className='footer-nav-ul'>
                            <li><a href='/'>Home</a></li>
                            <li><a href='/sales'>Sales</a></li>
                            <li><a href='/about'>About</a></li>
                        </ul>
                    </nav>
                    <nav>
                        <p>Talk to us</p>
                        <ul className='footer-nav-ul'>
                            <li><a href='#'>WhatsApp: (99) 99999-9999</a></li>
                            <li><a href='#'>talktous@email.com</a></li>
                            <li><a href='#'>Open from 6:30am to 17:00pm</a></li>
                        </ul>
                    </nav>
                    <nav>
                        <p>Social media</p>
                        <ul className='social-media-ul'>
                            <li><a href='#'><FontAwesomeIcon icon={faFacebook}/></a></li>
                            <li><a href='#'><FontAwesomeIcon icon={faInstagram}/></a></li>
                            <li><a href='#'><FontAwesomeIcon icon={faLinkedinIn}/></a></li>
                        </ul>
                    </nav>
                </div>
            </footer>
        )
    }
}

export default Footers;