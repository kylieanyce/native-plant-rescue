import React from "react"
import { Link } from "react-router-dom"


export const PlantPostCard = ({plant}) => {
    return (
        <section className="plantPosts" id={plant.id}>
            <h3>
                {plant.commonName}
            </h3>
            <p>{plant.description}</p>
        </section>
    )
}