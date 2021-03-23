import React, { useContext } from "react"
import { PostContext } from "../posts/PostProvider";

export const SearchPost = () => {
    const { setSearchTerms } = useContext(PostContext)

    return (
        <>
            Search Plants : 
            <input type="text"
                className="input--wide"
                onKeyUp={(event) => setSearchTerms(event.target.value)}
                placeholder="Search for a plant... " />
        </>
    )
}