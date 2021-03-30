import React, { useContext } from "react"
import { PostContext } from "../posts/PostProvider";
import "../nav/NavBar.css";

// displays search bar
export const SearchPost = () => {
    const { setSearchTerms } = useContext(PostContext)

    // on key up, grabs value from target and sets search terms with it
    return (
        <>
            <div className="searchBar">
            <input type="text"
                    className="searchInput"
                    onKeyUp={(event) => setSearchTerms(event.target.value)}
                    placeholder="Search for a plant... " />
            </div>
        </>
    )
}