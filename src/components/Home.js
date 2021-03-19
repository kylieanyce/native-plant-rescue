import React from "react";
import { useHistory } from "react-router-dom"


export const Home = () => {
    const history = useHistory()

    return (
        <>
            <h1>Native Plant Rescue</h1>
            <h3>Save the Bees!</h3>
            <button onClick={() => {
                history.push("/identifyForm")
            }}>Identify Your Plant</button>
        </>
    )
}