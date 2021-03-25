import React from "react"
import { Link } from "react-router-dom"
import "./Library.css";

// renders each individual library post on the library page
export const LibraryPostCard = ({ post }) => {
    return (
        <>
            {/* if the plant is not available, it will not render at all */}
            {post.available === true &&
                <section className="postCards" id={post.id}>
                    <div>
                        <h3 style={{ textTransform: 'capitalize' }}>
                            {post.plant?.scientificName}
                        </h3>
                        <h4 style={{ textTransform: 'capitalize' }}>{post.plant?.commonName}</h4>

                        {/* This makes the image a clickable link to take user to details page */}
                        <Link to={`/library/detail/${post.id}`}>
                            <img className="image" src={post.plant?.image}></img>
                        </Link>
                    </div>
                    <div>
                        <h5>Available: {post.available === true ? "Yes" : "No"}</h5>
                    </div>
                </section>
                }
        </>
    )
}
