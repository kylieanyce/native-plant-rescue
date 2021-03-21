import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { PostContext } from "./PostProvider";
import { UserContext } from "../users/UserProvider";
import { PlantContext } from "../plants/PlantProvider";

export const CreatePost = () => {
    const { addPost, getPostById, updatePost } = useContext(PostContext)
    const { users, getUsers } = useContext(UserContext)
    const { plants, getPlants, getPlantById } = useContext(PlantContext)

    const [post, setPost] = useState({
        userId: 0,
        plantId: 0,
        address: "",
        pickupInfo: "",
        available: true
    });

    const [isLoading, setIsLoading] = useState(true);
    const { postId } = useParams();
    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newPost = { ...post }
        newPost[event.target.id] = event.target.value
        setPost(newPost)
    }

    const handleAddPost = () => {
        setIsLoading(true);
        if (postId) {
            updatePost({
                userId: parseInt(post.userId),
                plantId: parseInt(post.plantId),
                address: post.address,
                pickupInfo: post.pickupInfo,
                available: post.available,
                id: post.id
            })
                .then(() => history.push(`/library/detail/${post.id}`))
        } else {
            addPost({
                userId: parseInt(post.userId),
                plantId: parseInt(post.plantId),
                address: post.address,
                pickupInfo: post.pickupInfo,
                available: post.available
            })
                .then(() => history.push("/library"))
        }
    }

    useEffect(() => {
        getPlantById(post.plantId)
    }, [])

    return (
        <form className="createPostForm">
            <h2 className="createForm__title">{postId ? "Edit Post" : "Create Post"}</h2>
            <div className="createPostAutofill">
                <h3>{post.plant?.scientificName}</h3>
            </div>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="createPost">Address: </label>
                    <input type="text" id="address" required autoFocus onChange={handleControlledInputChange} value={post.address} />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="createPost">Pickup Details: </label>
                    <input type="text" id="pickupInfo" autoFocus onChange={handleControlledInputChange} value={post.pickupInfo} />
                </div>
            </fieldset>

            <button className="btn" disabled={isLoading} onClick={event => {
                event.preventDefault()
                handleAddPost()
            }}>{postId ? "Save Edits" : "Add Post"}</button>
        </form>
    )
}