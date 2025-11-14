import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (

        <>
            <nav className="navbar">
                <div className="navbar-logo">MyApp</div>
                <ul className="navbar-links">
                    <li> <a href="/">Home</a></li>
                    <li><a href="/createblog">Add Blog</a></li>
                    {/* <li><a href="/singleblogs">Single Blog</a></li> */}
                    <li><a href="/contact">Contact</a></li>
                    
                </ul>
            </nav>

            
        </>
    )
}

export default Navbar