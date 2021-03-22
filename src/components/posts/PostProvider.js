import React, { useState, createContext } from "react"

export const PostContext = createContext()

export const PostProvider = (props) => {
    const [posts, setPosts] = useState([])

    const getPosts = () => {
        return fetch("http://localhost:8088/posts?_expand=plant")
        .then(res => res.json())
        .then(setPosts)
    }

    const addPost = (postObj) => {
        return fetch(`http://localhost:8088/posts`, {
        method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postObj)
        })
        .then(res => res.json())
        .then(getPosts)
    }

    const getPostById = (id) => {
        return fetch(`http://localhost:8088/posts/${id}?_expand=plant`)
        .then(res => res.json())
    }

    const updatePost = post => {
        return fetch(`http://localhost:8088/posts/${post.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        })
            .then(getPosts)
    }

    const claimPost = post => {
        return fetch(`http://localhost:8088/posts/${post.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        })
    }

    return (
        <PostContext.Provider value={{
            posts, getPosts, getPostById, addPost, updatePost, claimPost
        }}>
            {props.children}
        </PostContext.Provider>
    )
}