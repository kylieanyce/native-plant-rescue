import React from "react"
import "./Header.css"
import { NavBar } from "./nav/NavBar"


export const Header = () => {
    return (
        <>
            <div className="header">
                <header>
                    <h1>Native Plant Rescue</h1>
                    <h3>Save the Bees!</h3>
                    {/* <NavBar /> */}
                </header>
            </div>
        </>
    )
}