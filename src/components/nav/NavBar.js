import React from "react"
import { Link } from "react-router-dom"
import { SearchPost } from "./SearchPost";
import "./NavBar.css";

export const NavBar = (props) => {
    return (
        <>
            <ul className="navbar">
                <li className="navbar__link"><Link to="/myPosts">My Posts</Link></li>
                <li className="navbar__link"><Link to="/library">View Plant Library</Link></li>
                <li className="navbar__link"><Link to="/identifyForm">Identify A Plant</Link></li>
                <li className="search"><SearchPost/></li>
            </ul>
        </>
    )
}