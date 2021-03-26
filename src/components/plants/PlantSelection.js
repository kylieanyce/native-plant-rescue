import React, { useContext } from "react"
import { IdentifyContext } from "./Identify";
import { SelectPlantCard } from "./SelectPlant"
import { Grid } from '@material-ui/core';


// gives user a selection of plants that were found to match theirs
export const PlantSelection = () => {
    const { plants } = useContext(IdentifyContext)

    return (
        <div>
            <h2>Choose Your Plant</h2>
            <Grid container>
                <section className="selectPlantList">{plants.map(plant => {
                    return <SelectPlantCard key={plant.id} plant={plant} />
                })}</section>
            </Grid>
        </div>
    )
}