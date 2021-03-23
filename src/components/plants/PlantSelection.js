import React, { useContext, useEffect } from "react"
import { IdentifyContext } from "./Identify";
import { NativeContext } from "../natives/NativeProvider"
import { SelectPlantCard } from "./SelectPlant"



export const PlantSelection = () => {
    const { plants } = useContext(IdentifyContext)
    const { natives, getNatives } = useContext(NativeContext)

    useEffect(() => {
        getNatives()
    }, [])

    return (
        <div>
            <h2>Choose Your Plant</h2>
            <section className="selectPlantList">
                {plants.map(plant => {
                    debugger
                    const filteredNatives = natives.TnNatives.scientificName.filter(nativeItem => nativeItem.TnNatives.scientificName === plant.plant_details.scientific_name)
                    return <SelectPlantCard key={plant.id} plant={plant} native={filteredNatives}/>
                })}
            </section>
        </div>
    )
}