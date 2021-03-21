import React, { useContext } from "react"
import { useHistory } from "react-router-dom"
import "./SelectPlant.css";
import { PlantContext } from "./PlantProvider"

export const SelectPlantCard = ({ plant }) => {
    const history = useHistory()

    const { addPlant } = useContext(PlantContext)

    const plantCommonNames = plant.plant_details.common_names

    const handleCreatePost = () => {
        addPlant({
            commonName: plantCommonNames,
            scientificName: plant.plant_details.scientific_name,
            description: plant.plant_details.wiki_description.value,
            image: plant?.similar_images[0].url,
        })
            .then(() => { history.push("/create") })
    }

    return (
        <div className="selectPlantCard" value={plant.id}>
            <h4>Scientific Name: {plant.plant_details.scientific_name}</h4>
            {plantCommonNames !== null ? <p>Common Name: {plantCommonNames.map(item => item).join(", ")}</p> : ""}
            <p>{plant.plant_details.wiki_description.value}</p>
            <img className="selectImage" src={plant?.similar_images[0].url}></img>
            <button onClick={handleCreatePost}>This is my plant!</button>
        </div>
    )
}
