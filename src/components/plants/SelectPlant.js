import React from "react"
import { useHistory } from "react-router-dom"
import "./SelectPlant.css";

export const SelectPlantCard = ({ plant }) => {
    const history = useHistory()

    const plantCommonNames = plant.plant_details.common_names

    return (
        <div className="selectPlantCard" value={plant.id}>
            <h4>Scientific Name: {plant.plant_details.scientific_name}</h4>
            {plantCommonNames !== null ? <p>Common Name: {plantCommonNames.map(item => item).join(", ")}</p> : ""}
            <p>{plant.plant_details.wiki_description.value}</p>
            <img src={plant.similar_images[0].url}></img>
            <button onClick={() => history.push("/create")}>This is my plant!</button>
        </div>
    )
}
