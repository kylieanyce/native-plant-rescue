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
            console.log(posts)
            const subset = posts.filter(post => post.plant?.scientificName.toLowerCase().includes(searchTerms))
            setFiltered(subset)
        } else {
            setFiltered(posts)
        }
    }, [ searchTerms, posts])

    return (
        <div className="libraryPosts">
            <h2>Plant Library</h2>

            <p><button className="btn identifyButton" onClick={() => {
                history.push("/identifyForm")
            }}>Identify Your Plant</button></p>
            
            <div className="postList">
                {filteredPosts.map(post => {
                    return <LibraryPostCard key={post.id} post={post}  />
                })}
            </div>
        </div>
    )
}