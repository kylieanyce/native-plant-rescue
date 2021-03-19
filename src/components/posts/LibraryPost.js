import React from "react"
import { Link } from "react-router-dom"


export const LibraryPostCard = ({post}) => {
    return (
        <section className="plantPosts" id={post.id}>
            <h3>
                {post.plant?.commonName}
            </h3>
            <p>{post.plant?.description}</p>
        </section>
    )
}