import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { PostContext } from "./PostProvider";
import { PlantContext } from "../plants/PlantProvider";
import "./CreateEdit.css";

import Container from '@material-ui/core/Container';



// creates and updates posts
export const CreatePost = () => {
    const { addPost, getPostById, updatePost, getPosts } = useContext(PostContext)
    const currentUserId = parseInt(sessionStorage.getItem("app_user_id"))
    const { getPlantById } = useContext(PlantContext)

    // sets state for post
    const [post, setPost] = useState({
        userId: currentUserId,
        plantId: 0,
        address: "",
        pickupInfo: "",
        available: true,
        id: 0
    });

    // sets state for plant
    const [plant, setPlant] = useState({
        commonName: "",
        scientificName: "",
        description: "",
        image: "",
        id: 0
    })

    // keeps user from clicking buttons multiple times
    const [isLoading, setIsLoading] = useState(true);
    // grab post and plant id from params to determine add or create
    const { postId } = useParams();
    const { plantId } = useParams();
    const history = useHistory();

    // this updates state variables whenever dom is changed
    const handleControlledInputChange = (event) => {
        const newPost = { ...post }
        newPost[event.target.id] = event.target.value
        setPost(newPost)
    }

    // if the URL has a post id, this will update the post
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
                .then(() => history.push(`/library`))
        } else {
            // if no post id, create the post
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

    // first get posts 
    useEffect(() => {
        getPosts().then(() => {
            // if there is a plantId, get plant object by ID and set plant state var
            if (plantId) {
                getPlantById(plantId)
                    .then(plant => {
                        setPlant(plant)
                        setIsLoading(false)
                    })
            }
            // if there is a postID, get post by ID and set post state variable
            if (postId) {
                getPostById(postId)
                    .then(post => {
                        setPost(post)
                        setIsLoading(false)
                    })
            }
        })
    }, [])

    // renders create/update post form
    return (
        <form>
            {/* The title changes: if their is a postId, it will say Edit, if not, it says Create */}
            <h2 className="createForm__title">{postId ? "Edit Post" : "Create Post"}</h2>
            <div className="formContainer">
                <div className="createPostForm">
                    <div className="formStyle">

                        {/* enter address */}
                        <fieldset>
                            <div className="form-group">
                                <label htmlFor="createPost">Full Address: </label>
                                <input type="text" id="address" required autoFocus placeholder="123 Flower Way, Washington, DC 90210" onChange={handleControlledInputChange} value={post.address} />
                            </div>
                        </fieldset>

                        {/* enter pickup details */}
                        <fieldset>
                            <div className="form-group">
                                <label htmlFor="createPost">Pickup Details: </label>
                                <input type="text" id="pickupInfo" autoFocus onChange={handleControlledInputChange} value={post.pickupInfo} />
                            </div>
                        </fieldset>
                    </div>

                    {/* either edit or create post */}
                    <div className="buttons">
                        <p><button className="btn" disabled={isLoading} onClick={event => {
                            event.preventDefault()
                            handleAddPost()
                        }}>{postId ? "Save Edits" : "Add Post"}</button></p>

                        {/* go back to plant library */}
                        <p><button onClick={() => history.push(`/library`)}>Back to Plant Library</button></p>
                    </div>


                    {/* This div grabs information from plant that was selected and posted to API to be displayed */}
                    <div className="createPostAutofill">
                        <h3 style={{ textTransform: 'capitalize' }}>{plant.scientificName}</h3>
                        {plant.commonName ? <h4 style={{ textTransform: 'capitalize' }}>Common Name(s): {plant.commonName}</h4> : ""}
                        <p>{plant.description}</p>
                        <img className="editImage" src={plant.image}></img>
                    </div>
                </div>
            </div>
        </form>
    )
}