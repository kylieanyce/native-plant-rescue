import React, { useState, useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { PlantContext } from "../plants/PlantProvider";
import { PostContext } from "../posts/PostProvider";
import { LibraryPostCard } from "./LibraryPost"


export const LibraryList = () => {
    const { plants, getPlants } = useContext(PlantContext)
    const { posts, getPosts } = useContext(PostContext)

    // const [filteredPosts, setFiltered] = useState([])

    const history = useHistory()

    useEffect(() => {
        getPlants()
            .then(getPosts)
    }, [])

    return (
        <div className="libraryPosts">
            <h2>Plant Library</h2>
            <div>
                {
                    posts.map(postObj => {
                        const plant = plants.find(plantObj => postObj.id === plantObj.postId)
                        return <LibraryPostCard key={postObj.id} post={postObj} plant={plant}/>
                    })
                }
            </div>
            <button>Create Post</button>
            <button>Identify Plant</button>
        </div>
    )
}