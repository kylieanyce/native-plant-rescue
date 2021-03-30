import React, { useContext, useEffect } from "react"
import { IdentifyContext } from "./Identify";
import { NativeContext } from "../natives/NativeProvider"
import { SelectPlantCard } from "./SelectPlant"


// gives user a selection of plants that were found to match theirs
export const PlantSelection = () => {
    const { plants } = useContext(IdentifyContext)
    const { TnNatives, getTnNatives } = useContext(NativeContext)

    useEffect(() => {
        getTnNatives()
    }, [])

    return (
        <div>
            <h2>Choose Your Plant</h2>
            <section className="selectPlantList">
                {plants.map(plant => {
                    
                    console.log(TnNatives)
                    const filteredNatives = TnNatives.filter(nativeItem => nativeItem.scientificName === plant.plant_name)
                    return <SelectPlantCard key={plant.id} plant={plant} native={filteredNatives}/>
                })}
            </section>
        </div>
    )
}