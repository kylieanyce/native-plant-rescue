import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"

import { UserProvider } from "./users/UserProvider"

import { PlantSelection } from "./plants/PlantSelection"
import { IdentifyForm } from "./plants/IdentifyForm"
import { IdentifyProvider } from "./plants/Identify"
import { PlantProvider } from "./plants/PlantProvider"

import { PostProvider } from "./posts/PostProvider"
import { LibraryList } from "./posts/LibraryList"
import { PostDetails } from "./posts/Details"
import { CreatePost } from "./posts/CreatePostForm"

export const ApplicationViews = () => {
    return (
        <>
            <PlantProvider>
                <PostProvider>
                    <UserProvider>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/library">
                            <LibraryList />
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


                        <IdentifyProvider>
                            <Route path="/select">
                                <PlantSelection />
                            </Route>
                            <Route path="/identifyForm">
                                <IdentifyForm />
                            </Route>
                        </IdentifyProvider>
                    </UserProvider>
                </PostProvider>
            </PlantProvider>



        </>
    )
}