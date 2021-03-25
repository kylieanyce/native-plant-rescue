import React, { useContext } from "react"
import { PostContext } from "../posts/PostProvider";
import "./Search.css";

// displays search bar
export const SearchPost = () => {
    const { setSearchTerms } = useContext(PostContext)

    // on key up, grabs value from target and sets search terms with it
    return (
        <>
            <div className="search">
                Search Plants :
            <input type="text"
                    className="input--wide"
                    onKeyUp={(event) => setSearchTerms(event.target.value)}
                    placeholder="Search for a plant... " />
            </div>
        </>
    )
}