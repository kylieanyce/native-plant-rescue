import React, { useContext, useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { PostContext } from "./PostProvider";
import { PlantContext } from "../plants/PlantProvider";
import "./Library.css";


export const PostDetails = () => {
    const { claimPost, getPostById, deletePost } = useContext(PostContext)
    const currentUserId = parseInt(sessionStorage.getItem("app_user_id"))
    const { postId } = useParams();
    const history = useHistory();

    const [post, setPost] = useState({
        userId: currentUserId,
        plantId: 0,
        address: "",
        pickupInfo: "",
        available: true,
        id: 0
    });

    const handleClaimPost = () => {
        claimPost({
            userId: currentUserId,
            plantId: parseInt(post.plantId),
            address: post.address,
            pickupInfo: post.pickupInfo,
            available: false,
            id: post.id
        })
            .then(() => history.push(`/claim`))
    }

    const handleDeletePost = () => {
        deletePost(postId)
        .then(() => history.push("/library"))
    }

    useEffect(() => {
        getPostById(postId)
        .then((res) => {
            setPost(res)
        })
    }, [])

    return (
        <section className="details">
            <h2>{post.plant?.scientificName}</h2>
            {post.plant?.commonName !== null ? <div><h3>Common Names: </h3><p>{post.plant?.commonName}</p></div> : ""}
            <img src={post.plant?.image}></img>
            <p>{post.plant?.description}</p>
            {currentUserId === post.userId ? "" : <div><label>Have you picked up this plant? </label><button className="btn claimButton" onClick={handleClaimPost}>Yes!</button></div>}
            {currentUserId === post.userId ? <button onClick={() => history.push(`/${postId}/${post.plant?.id}/edit`)}>
                Edit
            </button> : "" } 
            {currentUserId === post.userId ? <button onClick={handleDeletePost}>
                Delete
            </button> : "" } 
            
            <p>Address: {post.address}</p>
            {post.pickupInfo !== "" ? <p>Pickup Details: {post.pickupInfo}</p> : ""}
            <p>Available: {post.available === true ? "Yes" : "No"}</p>
            <button onClick={() => history.push(`/library`)}>Back to Plant Library</button>
        </section>
    )


}