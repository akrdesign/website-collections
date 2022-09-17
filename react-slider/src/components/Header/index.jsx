import React from 'react'
import "./style.scss"
import Hamburger from '../../Hamburger'

const Header = () => {
    return (
        <div className="header-container margin-container">
            <div className="header-logo">Moon skin</div>

            <div className="header-action">Online shop</div>
            <Hamburger />
        </div>
    )
}

export default Header