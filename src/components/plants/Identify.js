import { React } from "react";
import { testAPI } from "../../Settings.js";
import { useState, createContext } from "react"
import { useHistory } from "react-router-dom"



const apiKey = testAPI.apiKeyIdentify

export const IdentifyContext = createContext()

export const IdentifyProvider = (props) => {
    const [plants, setPlants] = useState([])

    const history = useHistory()

    const sendIdentification = () => {
        // const files = (event) => event.target.id.includes("input[type=file]").files;
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
                    console.log("Success:", data);
                    setPlants(data.suggestions)
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