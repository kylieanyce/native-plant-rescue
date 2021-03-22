import React, { useContext } from "react";
import { IdentifyContext } from "./Identify";
import "./Identify.css";
import { useHistory } from "react-router-dom";


export const IdentifyForm = () => {
    const { sendIdentification } = useContext(IdentifyContext)
    const history = useHistory()

    return (
        <div className="outerIdentifyForm">
            <div className="identifyForm">
                <form className="innerIdentifyForm">
                    <input type="file" multiple />
                    <button onClick={sendIdentification} type="button">OK</button>
                <button onClick={() => history.push(`/library`)}>Back to Plant Library</button>
                </form>

            </div>
        </div>
    )
}
