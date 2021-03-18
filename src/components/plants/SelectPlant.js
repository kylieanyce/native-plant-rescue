import React from "react"

export const SelectPlantCard = ({ plant }) => {
    return (
        <div value={plant.id}>
            <h4>Common Name: {plant.plant_details.common_names}</h4>
            <p>Scientific Name: {plant.plant_details.scientific_name}</p>
            <p>{plant.plant_details.wiki_description.value}</p>
        </div>
    )
}
