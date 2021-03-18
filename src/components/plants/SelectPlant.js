import React from "react"
import { useHistory } from "react-router-dom"


export const SelectPlantCard = ({ plant }) => {
    const history = useHistory()

    return (
        <div value={plant.id}>
            <h4>Scientific Name: {plant.plant_details.scientific_name}</h4>
            {plant.plant_details.common_names !== null ? <p>Common Name: {plant.plant_details.common_names}</p> : ""}
            <p>{plant.plant_details.wiki_description.value}</p>
            <img src={plant.similar_images[0].url}></img>
            <button onClick={() => history.push("/create")}>This is my plant!</button>
        </div>
    )
}
