import React from 'react'

const Footer = ( props ) => {
    return (
        <footer id="footerType" className={`footer__wrap ${props.element}`}>
            <h2 className="blind">footer</h2>
            <div className="footer__inner container">
                <div className="footer__menu">
                <div id="image01"></div>   
                    <div>
                        <h3>test</h3>
                        <ul>
                            <li><a href="/"> 2024</a></li>
                            <li><a href="/">0604</a></li>
                        
                        </ul>
                    </div>
                    <div>
                        <h3>header</h3>
                        <ul>
                            <li><a href="/">t</a></li>
                            <li><a href="/">e</a></li>
                            <li><a href="/">s</a></li>
                            <li><a href="/">t</a></li>
                        </ul>
                </div>
                </div>
                <div className="footer__right">
               2024 06 04 test<br />
                </div>
            </div>
        </footer>
    )
}

export default Footer