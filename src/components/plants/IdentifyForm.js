import React, { useContext } from "react";
import { IdentifyContext } from "./Identify";


export const IdentifyForm = () => {
    const { sendIdentification } = useContext(IdentifyContext)

    return (
        <form>
            <input type="file" multiple />
            <button onClick={sendIdentification} type="button">OK</button>
        </form>
    )
}
