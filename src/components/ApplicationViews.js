import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"

import { PlantSelection } from "./plants/PlantSelection"
import { IdentifyForm } from "./plants/IdentifyForm"
import { IdentifyProvider } from "./plants/Identify"
import { PlantProvider } from "./plants/PlantProvider"
import { PostProvider } from "./posts/PostProvider"
import { UserProvider } from "./users/UserProvider"
// import { CreatePost } from "./plants/CreateForm"
import { LibraryList } from "./posts/LibraryList"
import { PostDetails } from "./posts/Details"

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
                    </UserProvider>
                </PostProvider>

                <IdentifyProvider>
                    <Route path="/select">
                        <PlantSelection />
                    </Route>
                    <Route path="/identifyForm">
                        <IdentifyForm />
                    </Route>
                    {/* <Route path="/create">
                        <CreatePost />
                    </Route> */}
                </IdentifyProvider>
            </PlantProvider>



        </>
    )
}