import React, { useState, useContext, useEffect } from "react"
import { PlantContext } from "../plants/PlantProvider";
import { PostContext } from "../posts/PostProvider";
import { LibraryPostCard } from "./LibraryPost"
import "./Library.css";



// renders plant library
export const LibraryList = () => {
    const { getPlants } = useContext(PlantContext)
    const { posts, getPosts, searchTerms } = useContext(PostContext)
    // set filtered plant state for searching library 
    const [filteredPosts, setFiltered] = useState([])

    // get plants then posts
    useEffect(() => {
        getPlants()
            .then(getPosts)
    }, [])

    // if search terms are not empty, filter through posts and return 
    // posts which have letters that are included in their scientific and 
    // common names that match the what's in the search terms. 
    useEffect(() => {
        if (searchTerms !== "") {
            const subset = posts.filter(post => post.plant?.scientificName.toLowerCase().includes(searchTerms) || post.plant?.commonName.toLowerCase().includes(searchTerms))
            // sets filteredPost state var with subset array
            setFiltered(subset)
        } else {
            // if search terms is empty, set filtered post with all posts
            const secondSubset = posts.filter(post => post.available === true)
            setFiltered(secondSubset)
        }
        // watches for each time searchTerms and posts change so it can rerender
    }, [searchTerms, posts])

    // renders plant library
    return (
        <div className="libraryPosts">
            <h2 className="neon">Available Plants</h2>
                {/* map through filtered posts and send to library post card to be rendered*/}
                <div className="postList">
                    {filteredPosts.map(post => {
                        return <LibraryPostCard key={post.id} post={post} />
                    })}
                </div>
        </div>
    )
}