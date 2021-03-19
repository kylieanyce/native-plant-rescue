import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { PlantSelection } from "./plants/PlantSelection"
import { IdentifyForm } from "./plants/IdentifyForm"
import { IdentifyProvider } from "./plants/IdentifyProvider"
import { PlantProvider } from "./plants/PlantProvider"
import { CreatePost } from "./plants/CreateForm"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/register">
                <Register />
            </Route>

            <PlantProvider>
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