import React, { useContext, useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { PostContext } from "./PostProvider";
import "./Library.css";

// plant details page
export const PostDetails = () => {
    const { claimPost, getPostById, deletePost } = useContext(PostContext)
    const currentUserId = parseInt(sessionStorage.getItem("app_user_id"))
    const { postId } = useParams();
    const history = useHistory();

    // set post state variable
    const [post, setPost] = useState({
        userId: currentUserId,
        plantId: 0,
        address: "",
        pickupInfo: "",
        available: true,
        id: 0
    });

    // sets available: to false so that plant does not display as available
    const handleClaimPost = () => {
        claimPost({
            userId: currentUserId,
            plantId: parseInt(post.plantId),
            address: post.address,
            pickupInfo: post.pickupInfo,
            available: false,
            id: post.id
        })
        // sends user to claim page where they are then thanked
            .then(() => history.push(`/claim`))
    }

    // deletes post from API and sends user to library
    const handleDeletePost = () => {
        deletePost(postId)
        .then(() => history.push("/library"))
    }

    // grab post by ID from params and set post
    useEffect(() => {
        getPostById(postId)
        .then((res) => {
            setPost(res)
        })
    }, [])

    // renders details of plant
    return (
        <section className="details">
            {/* Scientific Name */}
            <h2>{post.plant?.scientificName}</h2>

            {/* Common Names (if they exist) */}
            {post.plant?.commonName !== null ? <div><h3>Common Names: </h3><p>{post.plant?.commonName}</p></div> : ""}
            
            {/* Image */}
            <img src={post.plant?.image}></img>

            {/* Description */}
            <p>{post.plant?.description}</p>

            {/* Claim plant button (only shows up if user logged in did not create this post) */}
            {currentUserId === post.userId ? "" : <div><label>Have you picked up this plant? </label><button className="btn claimButton" onClick={handleClaimPost}>Yes!</button></div>}
            
            {/* Edit button (only shows up if user created this) */}
            {currentUserId === post.userId ? <button onClick={() => history.push(`/${postId}/${post.plant?.id}/edit`)}>
                Edit
            </button> : "" } 
            
            {/* Delete button (only shows up if user created it) */}
            {currentUserId === post.userId ? <button onClick={handleDeletePost}>
                Delete
            </button> : "" } 
            
            {/* Address */}
            <p>Address: {post.address}</p>
            
            {/* Pickup Info */}
            {post.pickupInfo !== "" ? <p>Pickup Details: {post.pickupInfo}</p> : ""}

            {/* Availablity */}
            <p>Available: {post.available === true ? "Yes" : "No"}</p>
            
            {/* Back to library button */}
            <button onClick={() => history.push(`/library`)}>Back to Plant Library</button>
        </section>
    )


}