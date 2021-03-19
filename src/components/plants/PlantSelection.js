import React, { useContext } from "react"
import { IdentifyContext } from "./Identify";
import { SelectPlantCard } from "./SelectPlant"


export const PlantSelection = () => {
    const { plants } = useContext(IdentifyContext)

    return (
        <div>
            <h2>Choose Your Plant</h2>
            <section>{plants.map(plant => {
                return <SelectPlantCard key={plant.id} plant={plant} />
            })}</section>
        </div>
    )
}