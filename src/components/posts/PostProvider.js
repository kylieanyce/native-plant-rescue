import React, { useState, createContext } from "react"

export const PostContext = createContext()

export const PostProvider = (props) => {
    const [posts, setPosts] = useState([])

    const getPosts = () => {
        return fetch("http://localhost:8088")
        .then(res => res.json())
        .then(setPosts)
    }

    return (
        <PostProvider.Provider value={{
            posts, getPosts
        }}>
            {props.children}
        </PostProvider.Provider>
    )
}