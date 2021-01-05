import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {

    return(
        <header 
            className="header flex-center">
            <NavLink
                exact
                to="/"
                activeStyle={{
                    textDecoration: "underline"
                }}
            >Projects</NavLink>
            <NavLink
                to="/about"
                activeStyle={{
                    textDecoration: "underline"
                }}
            >About</NavLink>
            <NavLink
                to="/contact"
                activeStyle={{
                    textDecoration: "underline"
                }}
            >Contact</NavLink>
        </header>
    )
}
export default Header