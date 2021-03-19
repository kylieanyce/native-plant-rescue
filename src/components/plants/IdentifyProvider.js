import { React } from "react";
import { testAPI } from "../../Settings.js";
import { useState, createContext } from "react"
import { useHistory } from "react-router-dom"



const apiKey = testAPI.apiKey

export const IdentifyContext = createContext()

export const IdentifyProvider = (props) => {
    const [plants, setPlants] = useState([])
    const [plantImages, setPlantImages] = useState([])

    const history = useHistory()

    const sendIdentification = () => {
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
        Promise.all(promises).then((base64files) => {
            console.log(base64files);
            
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
                similar_images: [
                    "url"
                ],
            };

            fetch("https://api.plant.id/v2/identify", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
            .then((response) => response.json())
            .then((data) => {
                    console.log("Success:", data.suggestions);
                    setPlants(data.suggestions)
                    // console.log("success:", data.modifiers.similar_images)
                    // setPlantImages(data.modifiers.similar_images)
                })
                
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