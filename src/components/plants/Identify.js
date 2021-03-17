import { React } from "react";


export const Identify = () => {
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
                    "qd2QLSXO43bvmemiZz2DCK9hwChs19OeFU96aZI8NS91T3dKuv",
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
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        });
    };

        return (
            <form>
                <input type="file" multiple />
                <button onClick={sendIdentification} type="button">OK</button>
            </form>
        )
}