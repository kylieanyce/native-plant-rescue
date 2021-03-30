import React, { useContext, useEffect } from "react"
import { IdentifyContext } from "./Identify";
import { NativeContext } from "../natives/NativeProvider"
import { SelectPlantCard } from "./SelectPlant"


<<<<<<< HEAD

=======
// gives user a selection of plants that were found to match theirs
>>>>>>> main
export const PlantSelection = () => {
    const { plants } = useContext(IdentifyContext)
    const { natives, getNatives } = useContext(NativeContext)

    useEffect(() => {
        getNatives()
    }, [])

    return (
        <div>
            <h2>Choose Your Plant</h2>
<<<<<<< HEAD
            <section className="selectPlantList">
                {plants.map(plant => {
                    debugger
                    const filteredNatives = natives.TnNatives.scientificName.filter(nativeItem => nativeItem.TnNatives.scientificName === plant.plant_details.scientific_name)
                    return <SelectPlantCard key={plant.id} plant={plant} native={filteredNatives}/>
                })}
            </section>
=======
                <section className="selectPlantList">{plants.map(plant => {
                    return <SelectPlantCard key={plant.id} plant={plant} />
                })}</section>
>>>>>>> main
        </div>
    )
}