import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"

import { UserProvider } from "./users/UserProvider"
import { Header } from "./Header"
import { Footer } from "./Footer"

import { PlantSelection } from "./plants/PlantSelection"
import { IdentifyForm } from "./plants/IdentifyForm"
import { IdentifyProvider } from "./plants/Identify"
import { PlantProvider } from "./plants/PlantProvider"

import { PostProvider } from "./posts/PostProvider"
import { LibraryList } from "./posts/LibraryList"
import { PostDetails } from "./posts/Details"
import { CreatePost } from "./posts/CreatePostForm"
import { ClaimPost } from "./posts/ClaimPost"
import { SearchPost } from "./posts/SearchPost"
import { NativeProvider } from "./natives/NativeProvider"
import { UserPostList } from "./users/PostList"

export const ApplicationViews = () => {
    return (
        <>
            <PlantProvider>
                <PostProvider>
                    <UserProvider>
                        <Header />
                        <Route exact path="/">
                            <SearchPost />
                            <Home />
                        </Route>
                        <Route exact path="/library">
                            <SearchPost />
                            <LibraryList />
                        </Route>
                        <Route exact path="/claim">
                            <ClaimPost />
                        </Route>
                        <Route exact path="/myPosts">
                            <UserPostList />
                        </Route>
                        <Route exact path="/library/detail/:postId(\d+)">
                            <PostDetails />
                        </Route>
                        <Route exact path="/:plantId(\d+)/create/">
                            <CreatePost />
                        </Route>
                        <Route exact path="/:postId(\d+)/:plantId(\d+)/edit/">
                            <CreatePost />
                        </Route>

                        <NativeProvider>
                            <IdentifyProvider>
                                <Route path="/select">
                                    <PlantSelection />
                                </Route>
                                <Route path="/identifyForm">
                                    <IdentifyForm />
                                </Route>
                            </IdentifyProvider>
                        </NativeProvider>
                    </UserProvider>
                </PostProvider>
            </PlantProvider>



        </>
    )
}