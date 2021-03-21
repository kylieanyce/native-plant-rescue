import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { PostContext } from "./PostProvider";
import { UserContext } from "../users/UserProvider";
import { PlantContext } from "../plants/PlantProvider";

export const CreatePost = () => {
    const { addPost, getPostById, updatePost } = useContext(PostContext)
    const { users, getUsers } = useContext(UserContext)
    const { plants, getPlants } = useContext(PlantContext)

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
        if (postId){
            updatePost({
                userId: parseInt(post.userId),
                plantId: parseInt(post.plantId),
                address: post.address,
                pickupInfo: post.pickupInfo,
                available: post.available,
                id: post.id
            })
            .then(() => history.push(`/library/detail/${animal.id}`))
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
        
    })


}