import React, { useState, createContext } from "react"

export const PlantContext = createContext()

export const PlantProvider = (props) => {
    const [plants, setPlants] = useState([])

    const getPlants = () => {
        return fetch("http://localhost:8088/plants")
        .then(res => res.json())
        .then(setPlants)
    }

    const getPlantById = (id) => {
        return fetch(`http://localhost:8088/plants/${id}`)
        .then(res => res.json())
        .then(() => console.log(id))
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
        .then(getPlants)
    }

    return (
        <PlantContext.Provider value={{
            plants, getPlants, addPlant, getPlantById
        }}>
            {props.children}
        </PlantContext.Provider>
    )
}