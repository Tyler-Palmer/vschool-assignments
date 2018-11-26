import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () =>{
    return(
        <div className="footerRow">
            <div className="footerContainer">
                <ul>
                    <li className="awesome">
                        <p className="icons"><FontAwesomeIcon icon= {['fab', 'twitter']} className="icon" /></p>
                    </li>
                    <li className="awesome">
                        <p className="icons"><FontAwesomeIcon icon= {['fab', 'facebook-f']} className="icon" /></p>
                    </li>
                    <li className="awesome">
                        <p className="icons"><FontAwesomeIcon icon= {['fab', 'github']} className="icon" /></p>
                    </li>
                </ul>
            <span id="copyright">Copyright &copy; your website 2018</span>
            </div>
        </div>
    )
}

export default Footer