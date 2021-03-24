import React, { useContext } from "react"
import { useHistory } from "react-router-dom"
import "./SelectPlant.css";
import { PlantContext } from "./PlantProvider"


// renders individual matching plants on DOM and handles the select plant function
export const SelectPlantCard = ({ plant }) => {
    const { addPlant } = useContext(PlantContext)
    const history = useHistory()

    // when the user selects whichever plant is theirs, the data is sent to my 
    // API and a plantId is created. When the data comes back, we grab the plant id
    // and they are sent to the create post form for that specific plant.
    const handleCreatePost = () => {
        addPlant({
            commonName: plant.plant_details.common_names[0],
            scientificName: plant.plant_details.scientific_name,
            description: plant.plant_details.wiki_description.value,
            image: plant?.similar_images[0].url,
        })
    }

    return (
        <div className="selectPlantCard" value={plant.id}>
            <h4 style={{ textTransform: 'capitalize' }}>Scientific Name: {plant.plant_details.scientific_name}</h4>
            {/* if the plant has no common names, this area will not display on DOM */}
            {plant.plant_details.common_names !== null ? <p style={{ textTransform: 'capitalize' }}>Common Name: {plant.plant_details.common_names[0]}</p> : ""}
            <p>{plant.plant_details.wiki_description.value}</p>
            <img className="selectImage" src={plant?.similar_images[0].url}></img>
            <button onClick={handleCreatePost}>This is my plant!</button>
        </div>
    )
}
