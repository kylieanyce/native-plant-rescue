import React from "react"
import "./Header.css"

export const Header = () => {
    return (
        <>
            <div className="headerOverlay">
                <div className="header">
                    <header>
                        <img className="logo" src="../ScreenshotLogo.png" />
                        <h1 className="title">Native Plant Rescue</h1>
                    </header>
                </div>
            </div>
        </>
    )
}