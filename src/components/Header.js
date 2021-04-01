import React from "react"
import "./Header.css"

export const Header = () => {
    return (
        <>
            <div className="headerOverlay">
                <div className="header">
                    <header>
                        <img className="logo" src="../ScreenshotLogo.png" />
                        
                        <div className="titleContainer"><h1 className="title">Native Plant Rescue</h1></div>
                    </header>
                </div>
            </div>
        </>
    )
}