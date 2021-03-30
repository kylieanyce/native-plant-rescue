import React, { useState, useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
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
    const history = useHistory()

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
            setFiltered(posts)
        }
        // watches for each time searchTerms and posts change so it can rerender
    }, [searchTerms, posts])

    // renders plant library
    return (
        <div className="libraryPosts">
            <h2>Available Plants</h2>

            {/* identify button sends user to identify plant form */}
            <p><button className="btn identifyButton" onClick={() => {
                history.push("/identifyForm")
            }}>Identify Your Plant</button></p>

                {/* map through filtered posts and send to library post card to be rendered*/}
                <div className="postList">
                    {filteredPosts.map(post => {
                        return <LibraryPostCard key={post.id} post={post} />
                    })}
                </div>
        </div>
    )
}