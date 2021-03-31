import React from "react"
import "./Header.css"
import { NavBar } from "./nav/NavBar"


export const Header = () => {
    return (
        <>
            <div className="headerOverlay">
                <div className="header">
                    <header>
                        <h1>Native Plant Rescue</h1>
                        {/* <NavBar /> */}
                    </header>
                </div>
            </div>
        </>
    )
}