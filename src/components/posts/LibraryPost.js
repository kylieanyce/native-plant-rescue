import React from "react"
import { Link } from "react-router-dom"
import "./Library.css";


export const LibraryPostCard = ({ post }) => {
    return (
        <section className="postCards" id={post.id}>
            <div>
                <h3>
                    {post.plant?.scientificName}
                </h3>
                <Link to={`/library/detail/${post.id}`}>
                    <img className="image" src={post.plant?.image}></img>
                </Link>
            </div>
            <div>
                <h5>Available: {post.available === true ? "Yes" : "No"}</h5>
            </div>
        </section>
    )
}