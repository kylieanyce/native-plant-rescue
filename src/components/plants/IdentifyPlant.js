import React, {useContext} from "react"
import { Link } from "react-router-dom"
import { IdentifyContext } from "./IdentifyProvider";
import { SelectPlantCard} from "./SelectPlant"

export const IdentifyCard = () => {
    const {plants} = useContext(IdentifyContext)

    return (
        <section>{plants.map(plant => {
            return <SelectPlantCard key={plant.id} plant={plant} />
        })}</section>
    )
}