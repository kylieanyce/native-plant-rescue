import React from "react"
import { Link } from "react-router-dom"


export const NavBar = (props) => {
    return (
        <>
        <div className="navbar">
        <p><Link className="navbar__link" to="/library">View Plant Library</Link></p>
        </div>
        </>
        )
    }