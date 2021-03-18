import React, {useContext} from "react"
import { IdentifyContext } from "./IdentifyProvider";
import { SelectPlantCard} from "./SelectPlant"


export const PlantSelection = () => {
    const {plants} = useContext(IdentifyContext)

    return (
        <section>{plants.map(plant => {
            return <SelectPlantCard key={plant.id} plant={plant} />
        })}</section>
    )
}