import React from "react"
import { Link } from "react-router-dom"
import "./Library.css";


export const LibraryPostCard = ({ post }) => {
    return (
        <>
            {post.available === true ?
                <section className="postCards" id={post.id}>
                        <div>
                            <h3>
                                {post.plant?.scientificName}
                            </h3>
                            <h4 style={{textTransform: 'capitalize'}}>{post.plant?.commonName}</h4>
                            <Link to={`/library/detail/${post.id}`}>
                                <img className="image" src={post.plant?.image}></img>
                            </Link>
                        </div>
                        <div>
                            <h5>Available: {post.available === true ? "Yes" : "No"}</h5>
                        </div>
                </section>
                : ""}
        </>
    )
}
