import React, { useContext, useRef } from "react";
import { IdentifyContext } from "./Identify";
import "./Identify.css";
import { useHistory } from "react-router-dom";

// creates identification form 
export const IdentifyForm = () => {
    const { sendIdentification } = useContext(IdentifyContext)
    const history = useHistory()
    // useRef grabs whatever associated file is input on the DOM 
    // must be set to null until it is filled
    const fileElement = useRef(null)

    // when user clicks ok button, calls this function which
    // grabs input from ref and sets to files variable then 
    // passes files into sendIdentification
    const handleFile = () => {
        const files = fileElement.current.files
        sendIdentification(files)
    }

    return (
        <div className="outerIdentifyForm">
            <div className="identifyForm">
                <form className="innerIdentifyForm">
                    {/* ref needs to be associated with an input so the variable to be later 
                    assigned with the input is added as a property */}
                    <input type="file" ref={fileElement} multiple />
                    <button onClick={handleFile} type="button">OK</button>
                <p><button onClick={() => history.push(`/library`)}>Back to Plant Library</button></p>
                </form>

            </div>
        </div>
    )
}
