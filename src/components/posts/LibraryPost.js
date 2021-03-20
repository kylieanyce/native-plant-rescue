import React from "react"
import { Link } from "react-router-dom"


export const LibraryPostCard = ({ post }) => {
    return (
        <section className="plantPosts" id={post.id}>
            <div>
                <h3>
                    {post.plant?.scientificName}
                </h3>
                <h5>{post.plant?.commonName}</h5>
                <p>{post.plant?.description}</p>
                <img src={post.plant?.image}></img>
            </div>
            <div>
                <h5>Available: {post.available === true ? "Yes" : "No"}</h5>
                <p>Location: {post.address}</p>
                <p>Details: {post.pickupInfo}</p>
            </div>
        </section>
    )
}