import React, { useContext, useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { PostContext } from "./PostProvider";
import { PlantContext } from "../plants/PlantProvider";
import "./Library.css";


export const PostDetails = () => {
    const { getPostById } = useContext(PostContext)
    const [post, setPost] = useState({})
    const currentUserId = parseInt(sessionStorage.getItem("app_user_id"))
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
            {post.plant?.commonName !== null ? <div><h3>Common Names: </h3><p>{post.plant?.commonName.map(item => item).join(", ")}</p></div> : ""}
            <img src={post.plant?.image}></img>
            <p>{post.plant?.description}</p>
            <button className="btn claimButton">Claim This Plant</button>
            {currentUserId === post.userId ? <button onClick={() => {
                history.push(`/${postId}/${post.plant?.id}/edit`)
            }}>
                Edit
            </button> : "" } 

            <p>Address: {post.address}</p>
            {post.pickupInfo !== "" ? <p>Pickup Details: {post.pickupInfo}</p> : ""}
            <p>Available: {post.available === true ? "Yes" : "No"}</p>
        </section>
    )


}