import React, { useContext, useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { PostContext } from "./PostProvider";
import { PlantContext } from "../plants/PlantProvider";
import "./Library.css";


export const PostDetails = () => {
    const { getPostById } = useContext(PostContext)
    const [post, setPost] = useState({})
    const { postId } = useParams();
    const history = useHistory();

    useEffect(() => {
        getPostById(postId)
        .then((res) => {
            setPost(res)
        })
    }, [])

    return (
        <section className="details">
            <h2>{post.plant?.scientificName}</h2>
            {post.plant?.commonName === post.plant?.commonName ? <h4>{post.plant?.commonName}</h4> : ""}
            <img src={post.plant?.image}></img>
            <p>{post.plant?.description}</p>
            <p>Address: {post.address}</p>
            {post.pickupInfo === post.pickupInfo ? <p>Pickup Details: {post.pickupInfo}</p> : ""}
            <p>Available: {post.available === true ? "Yes" : "No"}</p>
            <p></p>

        </section>
    )


}