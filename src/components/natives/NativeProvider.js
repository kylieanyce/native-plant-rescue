import React, { useState, createContext } from "react"
import { useHistory } from "react-router-dom";

export const NativeContext = createContext()

export const NativeProvider = (props) => {
    const [TnNatives, setTnNatives] = useState([])

    const getTnNatives = () => {
        return fetch(`http://localhost:8088/TnNatives`)
            .then(res => res.json())
            .then(setTnNatives)
    }

    return (
        <NativeContext.Provider value={{
            TnNatives, getTnNatives
        }}>
            {props.children}
        </NativeContext.Provider>
    )
}