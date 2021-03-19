import React, { useState, useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { PlantContext } from "../plants/PlantProvider";
import { UserContext } from "../users/UserProvider";
import { PlantPostCard } from "./LibraryPost"


export const LibraryList = () => {
    const { plants, getPlants } = useContext(PlantContext)
    const { users, getUsers } = useContext(UserContext)

    // const [filteredPosts, setFiltered] = useState([])

    const history = useHistory()

    useEffect(() => {
        getUsers()
            .then(getPlants)
    }, [])

    return (
        <div className="libraryPosts">
            <h2>Plant Library</h2>
            <div>
                {
                    plants.map(plantObj => {
                        const user = users.find(userObj => userObj.id === plantObj.userId)
                        return <PlantPostCard key={plantObj.id} post={plantObj} user={user}/>
                    })
                }
            </div>
            <button></button>
            <button></button>
        </div>
    )
}