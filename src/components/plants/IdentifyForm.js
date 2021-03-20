import React, { useContext } from "react";
import { IdentifyContext } from "./Identify";
import "./Identify.css";


export const IdentifyForm = () => {
    const { sendIdentification } = useContext(IdentifyContext)

    return (
        <div className="outerIdentifyForm">
            <div className="identifyForm">
                <form>
                    <input type="file" multiple />
                    <button onClick={sendIdentification} type="button">OK</button>
                </form>
            </div>
        </div>
    )
}
