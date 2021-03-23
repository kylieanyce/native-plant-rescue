import React, { useState, createContext } from "react"
import { testAPI } from "../../Settings.js";
import { useHistory } from "react-router-dom";

export const NativeContext = createContext()
const apiKey = testAPI.apiKeyNative

export const NativeProvider = (props) => {
    const [natives, setNatives] = useState([])

    // const getNatives = () => {
    //     return fetch(`https://trefle.io/api/v1/plants?token=${apiKey}`)
    //         .then(res => res.json())
    //         .then(setNatives)
    // }

    const getNatives = () => {
        return fetch(`http://localhost:8088/natives`)
            .then(res => res.json())
            .then(setNatives)
    }

    return (
        <NativeContext.Provider value={{
            natives, getNatives
        }}>
            {props.children}
        </NativeContext.Provider>
    )
}