import React, { useState, createContext } from "react"
import { useHistory } from "react-router-dom";

export const PlantContext = createContext()

export const PlantProvider = (props) => {
    const [plants, setPlants] = useState([])
    const history = useHistory()

    const getPlants = () => {
        return fetch("http://localhost:8088/plants")
            .then(res => res.json())
            .then(setPlants)
    }

    const getPlantById = (id) => {
        return fetch(`http://localhost:8088/plants/${id}`)
            .then(res => res.json())
    }

    const addPlant = (plantObj) => {
        return fetch(`http://localhost:8088/plants`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(plantObj)
        })
            .then(res => res.json())
            // post always brings data back so grab id of data 
            // and send user to create form based on new plant id
            .then(createdPlant => {
                if (createdPlant.hasOwnProperty("id")) {
                    history.push(`/${createdPlant.id}/create`)
                }
            })
    }

    return (
        <PlantContext.Provider value={{
            plants, getPlants, addPlant, getPlantById
        }}>
            {props.children}
        </PlantContext.Provider>
    )
}