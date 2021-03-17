import React from 'react'
import './style.css'
import CartWidget from '../CartWidget'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>Home</li>
                <li><CartWidget/></li>
            </ul>
        </nav>
    )
}

export default Navbar