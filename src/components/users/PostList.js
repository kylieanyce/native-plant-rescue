import React, { useState, useContext, useEffect } from "react"
import { PostContext } from "../posts/PostProvider";
import { UserPostCard } from "./Post.js"


export const UserPostList = () => {
    const { posts, getPosts } = useContext(PostContext)
    const currentUserId = parseInt(sessionStorage.getItem("app_user_id"))

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <div className="postList">
            {posts.map(post => {
                if (post.userId === currentUserId) {
                    return <UserPostCard key={post.id} post={post} />
                }
            })}
        </div>
    )
}