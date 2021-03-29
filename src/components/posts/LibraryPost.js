import React from "react"
import { Link } from "react-router-dom"
import "./Library.css";


// renders each individual library post on the library page
export const LibraryPostCard = ({ post }) => {

    return (
        <section className="postCards" id={post.id}>
            <div className="alignCard">
                <div className="postImage">
                    {/* This makes the image a clickable link to take user to details page */}
                    <Link to={`/library/detail/${post.id}`}>
                        <img className="image" src={post.plant?.image}></img>
                    </Link>
                </div>

                <div>
                    <h3 style={{ textTransform: 'capitalize' }}>
                        {post.plant?.scientificName}
                    </h3>
                    <h4 style={{ textTransform: 'capitalize' }}>{post.plant?.commonName}</h4>
                    <p>Available: {post.available === true ? "Yes" : "No"}</p>
                </div>
            </div>
        </section>
    )
}


