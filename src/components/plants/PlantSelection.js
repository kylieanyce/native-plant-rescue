import React, { useContext, useHistory } from "react"
import { IdentifyContext } from "./Identify";
import { SelectPlantCard } from "./SelectPlant"
import { Link } from "react-router-dom"


// gives user a selection of plants that were found to match theirs
export const PlantSelection = () => {
    const { plants } = useContext(IdentifyContext)

    return (
        <>
        {console.log(plants)}
            {plants.length ?
                <div>
                    <h2>Choose Your Plant</h2>
                    <section className="selectPlantList">
                        {plants.map(plant => {
                            return <SelectPlantCard key={plant.id} plant={plant} />
                        })}
                    </section>
                </div>
                :
                <div className="selectPlantCard">
                    <h2>Non-Native</h2>
                    <p>The plant you have uploaded is unfortunately a non-native species to the Nashville Area.</p>
                    <p>To continue to identify and post native plants, return to the <Link to={'/identifyForm'}> Identify Form</Link>  or head back to the <Link to={'/library'}> Available Plant Library.</Link></p>
                </div>}
        </>
    )
}