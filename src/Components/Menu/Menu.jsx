import React from "react";
import { Link } from 'react-router-dom'

const Menu = () => {

    return (
        <nav>
            <ul >
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about"></Link>About</li>
                <li><Link to="/products"></Link>Our Robots</li>
                <li><Link to="contact"></Link>Contact</li>
            </ul>
        </nav>
    )
}

export default Menu;
