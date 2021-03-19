import React, { useState, createContext } from "react"

export const PostContext = createContext()

export const PostProvider = (props) => {
    const [posts, setPosts] = useState([])

    const getPosts = () => {
        return fetch("http://localhost:8088/users?_embed=posts")
        .then(res => res.json())
        .then(setPosts)
    }

    return (
        <PostContext.Provider value={{
            posts, getPosts
        }}>
            {props.children}
        </PostContext.Provider>
    )
}