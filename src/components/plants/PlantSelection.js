import React, { useContext } from "react"
import { IdentifyContext } from "./Identify";
import { SelectPlantCard } from "./SelectPlant"
import { Link } from "react-router-dom"


// gives user a selection of plants that were found to match theirs
export const PlantSelection = () => {
    const { plants } = useContext(IdentifyContext)

    return (
        <>
            {plants.length ?
                <div>
                    <h2 className="neon">Select Your Plant</h2>
                    <section className="selectPlantList">
                        {plants.map(plant => {
                            return <SelectPlantCard key={plant.id} plant={plant} />
                        })}
                    </section>
                </div>
                :
                <div className="nonNativeContainer">
                    <div className="nonNativeSubContainer">
                        <div className="nonNativeTitle">
                            <h2>Non-Native</h2>
                            <p>The plant you have uploaded is unfortunately a non-native species to the Nashville Area.</p>
                        </div>
                        <div className="nativeLink"> <Link to={'/library'}> Ok </Link></div>
                    </div>
                </div>}
        </>
    )
}