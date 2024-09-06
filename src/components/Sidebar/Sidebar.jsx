import React, { useState } from "react";
import "./Sidebar.css"
import Logo from "../../assets/logo-cropped.png"
import '@fortawesome/fontawesome-free/css/all.min.css'

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false)

    const enableNav = () => {
        setShowNav(showNav === true? false : true)
    }

    return(
        <>
            <nav>
                <a href="#Home">
                    <img src={Logo} alt="" className="logo"/>
                </a>

                <ul className="sidebar-ul">
                    <li>
                        <a href="#Home" className="link">Home</a>
                    </li>
                    <li>
                        <a href="#About" className="link">About</a>
                    </li>
                    <li>
                        <a href="#Designs" className="link">Designs</a>
                    </li>
                    <li>
                        <a href="#Projects" className="link">Projects</a>
                    </li>
                    <li>
                        <a href="#Contact" className="link">Contact</a>
                    </li>
                </ul>

                <div className="hamburger-icon" onClick={enableNav}>
                    <i className="fa-solid fa-bars"></i>
                </div>

                {showNav && (
                    <ul className="hamburger-ul">
                        <li>
                            <a href="#Home" className="link">Home</a>
                        </li>
                        <li>
                            <a href="#About" className="link">About</a>
                        </li>
                        <li>
                            <a href="#Designs" className="link">Designs</a>
                        </li>
                        <li>
                            <a href="#Projects" className="link">Projects</a>
                        </li>
                        <li>
                            <a href="#Contact" className="link">Contact</a>
                        </li>
                    </ul>
                )}
            </nav>
        </>
    )
}

export default Sidebar