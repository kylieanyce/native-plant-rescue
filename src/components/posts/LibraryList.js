import React, { useState, useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { PlantContext } from "../plants/PlantProvider";
import { PostContext } from "../posts/PostProvider";
import { LibraryPostCard } from "./LibraryPost"
import "./Library.css";
import { SearchPost } from "./SearchPost";


export const LibraryList = () => {
    const { plants, getPlants } = useContext(PlantContext)
    const { posts, getPosts, searchTerms } = useContext(PostContext)

    const [filteredPosts, setFiltered] = useState([])

    const history = useHistory()

    useEffect(() => {
        getPlants()
            .then(getPosts)
    }, [])

    useEffect(() => {
        if (searchTerms !== "") {
            const subset = posts.filter(post => post.scientificName.toLowerCase().includes(searchTerms))
            setFiltered(subset)
        } else {
            setFiltered(posts)
        }
    }, [  ])

    return (
        <div className="libraryPosts">
            <h2>Plant Library</h2>
            <SearchPost />

            <p><button className="btn identifyButton" onClick={() => {
                history.push("/identifyForm")
            }}>Identify Your Plant</button></p>
            <div className="postList">
                {
                    posts.map(postObj => {
                        const plant = plants.find(plantObj => postObj.id === plantObj.postId)
                        return <LibraryPostCard key={postObj.id} post={postObj} plant={plant} />
                    })
                }
            </div>
        </div>
    )
}