import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { PlantSelection } from "./plants/PlantSelection"
import { IdentifyForm } from "./plants/IdentifyForm"
import { IdentifyProvider } from "./plants/IdentifyProvider"

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
            <IdentifyProvider>
                <Route path="/select">
                    <PlantSelection />
                </Route>
                <Route path="/identifyForm">
                    <IdentifyForm />
                </Route>
            </IdentifyProvider>

        </>
    )
}