import React from "react"
import { Link } from "react-router-dom"


export const PlantPostCard = ({plant}) => {
    return (
        <section className="plantPosts">
            <h3>
                {plant.name}
            </h3>
        </section>
    )
}