import React from 'react'

const Footer = () =>{
    return(
        <div className="footerRow">
            <div className="footerContainer">
                <ul>
                    <li>
                        <span className="fa-stack fa-lg">
                            <a href="#" className="fas fa-circle fa-stack-2x"></a>
                            <a href="#" className="fab fa-twitter fa-stack-1x fa-inverse"></a>
                        </span>
                    </li>
                    <li>
                        <span className="fa-stack fa-lg">
                            <a href="#" className="fas fa-circle fa-stack-2x"></a>
                            <a href="#" className="fab fa-facebook-f fa-stack-1x fa-inverse"></a>
                        </span>
                    </li>
                    <li>
                        <span className="fa-stack fa-lg">
                            <a href="#" className="fas fa-circle fa-stack-2x"></a>
                            <a href="#" className="fab fa-github fa-stack-1x fa-inverse"></a>
                        </span>
                    </li>
                </ul>
            <span id="copyright">Copyright &copy; your website 2018</span>
            </div>
        </div>
    )
}

export default Footer