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
    // identifies the plant
    const sendIdentification = () => {
        // finds file on the dom and uses FileReader to read the file as a URL
        const files = [...document.querySelector("input[type=file]").files];
        const promises = files.map((file) => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = (event) => {
                    const res = event.target.result;
                    console.log(res);
                    resolve(res);
                }
                reader.readAsDataURL(file);
            });
        });
        // then once all promises are fulfilled, turns file into base64
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