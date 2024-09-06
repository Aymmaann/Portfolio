import React from "react";
import "./Nav.css"

const Nav = () => {
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <a href="#" className="link">Intro</a>
                    </li>
                    <li>
                        <a href="#" className="link">About</a>
                    </li>
                    <li>
                        <a href="#" className="link">Projects</a>
                    </li>
                    <li>
                        <a href="#" className="link">Contact</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav;