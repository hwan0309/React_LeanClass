import React from 'react'

const Header = ( props ) => {
    return (
        <header id="headerType" className={`header__wrap ${props.element}`}>
            <div className="header__inner">
                <div className="header__logo">
                    <a href="/">web <em>site</em></a>
                </div>
                <nav className="header__menu">
                    <ul>
                        <div id="image01"></div>   
                        <li><a href="/">t</a></li>
                        <li><a href="/">e</a></li>
                        <li><a href="/">s</a></li>
                        <li><a href="/">t</a></li>
                        
                    </ul>
                </nav>
                <div className="header__member">
                    <a href="/">login</a>
                </div>
            </div>
        </header>
    )
}

export default Header