import { React } from "react";
import { IdentifyForm } from "./IdentifyForm";


export const IdentifyForm = () => {
    return (
        <form>
            <input type="file" multiple />
            <button onClick={sendIdentification} type="button">OK</button>
        </form>
    )
}
