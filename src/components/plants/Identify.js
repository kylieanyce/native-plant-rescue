import { React } from "react";
import { testAPI } from "../../Settings.js";
import { useState, createContext } from "react"
import { useHistory } from "react-router-dom"


//grabbing the api key from hidden file
const apiKey = testAPI.apiKeyIdentify

export const IdentifyContext = createContext()

//identify a plant then send user to select plant menu
export const IdentifyProvider = (props) => {
    const [plants, setPlants] = useState([])
    const history = useHistory()

    // identifies the plant and takes the image from useRef as parameter
    const sendIdentification = (imageFiles) => {
        // creates variable to make a copy of file and put in an array so it can be mapped
        const files = [...imageFiles]
        // creates variable that will contain mapped files
        const promises = files.map((file) => {
            // create a promise, when it has been fulfilled it will trigger resolve
            // if not, reject
            return new Promise((resolve, reject) => {
                // FileReader creates a reader 
                const reader = new FileReader();
                // a handler that is fired when the reader has successfully read the file  
                reader.onload = (event) => {
                    // grabs the target result of the event and sets to variable
                    const res = event.target.result;
                    console.log(res);
                    // result of target is passed into resolve to signify that it worked
                    resolve(res);
                }
                // starts reading the file, once completed the result is
                // a URL that represents the data (a base64 string)
                reader.readAsDataURL(file);
            });
        });
        // then once all promises are fulfilled, the result is passed to the API as a base64 file
        Promise.all(promises).then((base64files) => {
            // data must be posted so we can deliver info in header
            // need to deliver api key, image, modifiers to grab certain things,
            // language so we can read it when it comes back, and plant details. 
            const data = {
                api_key:
                    `${apiKey}`,
                images: base64files,
                modifiers: ["crops_fast", "similar_images"],
                plant_language: "en",
                plant_details: [
                    "common_names",
                    "url",
                    "name_authority",
                    "wiki_description",
                    "taxonomy",
                    "synonyms",
                ],
            };
            // API post call here
            fetch("https://api.plant.id/v2/identify", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data);
                    setPlants(data.suggestions)
                })
                //then send user to select plant menu
                .then(() => history.push("/select"))
                .catch((error) => {
                    console.error("Error:", error);
                });
        });
    };

    return (
        <>
            <IdentifyContext.Provider value={{
                plants, sendIdentification
            }}>
                {props.children}
            </IdentifyContext.Provider>
        </>
    )
}