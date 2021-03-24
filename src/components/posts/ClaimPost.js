import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';

// once a user hits the claim plant button, they see this screen thanking them
// and can go back to the plant library
export const ClaimPost = () => {
    const history = useHistory();

    return (
        <>
            <h3>Claimed!</h3>
            <p>Thank you for helping rescue native plants!</p>
            <button onClick={() => history.push("/library")}>Back to Plant Library</button>
        </>
    )
}