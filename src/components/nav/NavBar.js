import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import { Home } from "../Home";
import { Login } from "../auth/Login";

export const NavBar = (props) => {
    return (
        <>
        <div className="navbar">
        <p><Link className="navbar__link" to="/">Home</Link></p>
        <p><Link className="navbar__link" to="/login">Login</Link></p>
        {/* <p><Link className="navbar__link" to="/library">Library</Link></p> */}
        </div>
        </>
        )
    }