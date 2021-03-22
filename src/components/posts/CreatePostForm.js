import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { PostContext } from "./PostProvider";
import { UserContext } from "../users/UserProvider";
import { PlantContext } from "../plants/PlantProvider";

export const CreatePost = () => {
    const { addPost, getPostById, updatePost, getPosts } = useContext(PostContext)
    const currentUserId = parseInt(sessionStorage.getItem("app_user_id"))
    const { plants, getPlants, getPlantById } = useContext(PlantContext)

    const [post, setPost] = useState({
        userId: currentUserId,
        plantId: 0,
        address: "",
        pickupInfo: "",
        available: true,
        id: 0
    });

    const [plant, setPlant] = useState({
        commonName: "",
        scientificName: "",
        description: "",
        image: "",
        id: 0
    })

    const [isLoading, setIsLoading] = useState(true);
    const { postId } = useParams();
    const { plantId } = useParams();
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
                userId: currentUserId,
                plantId: parseInt(post.plantId),
                address: post.address,
                pickupInfo: post.pickupInfo,
                available: post.available,
                id: post.id
            })
                .then(() => history.push(`/library/detail/${post.id}`))
        } else {
            addPost({
                userId: currentUserId,
                plantId: parseInt(plantId),
                address: post.address,
                pickupInfo: post.pickupInfo,
                available: post.available
            })
                .then(() => history.push("/library"))
        }
    }
    useEffect(() => {
        getPosts().then(() => {
            if (plantId) {
                getPlantById(plantId)
                    .then(plant => {
                        setPlant(plant)
                        setIsLoading(false)
                    })
            } else {
                if (postId) {
                    getPostById(postId)
                        .then(post => {
                            setPost(post)
                            setIsLoading(false)
                        })
                }
            }
        })
    }, [])

    return (
        <form className="createPostForm">
            <h2 className="createForm__title">{postId ? "Edit Post" : "Create Post"}</h2>

            <div className="createPostAutofill">
                <h3>{plant.scientificName}</h3>
                {plant.commonName ? <h4>Common Name(s): {plant.commonName.map(item => item).join(", ")}</h4> : ""}
                <p>{plant.description}</p>
                <img src={plant.image}></img>
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
            {/* USE THIS DIV TO TEST STATE VARIABLE-----------
            <div>
                {JSON.stringify(post)}
            </div> */}
        </form>
    )
}