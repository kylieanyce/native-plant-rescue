import React, { useContext } from "react"
import { useHistory } from "react-router-dom"
import "./SelectPlant.css";
import { PlantContext } from "./PlantProvider"

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import { Grid } from '@material-ui/core';



const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    }
});

// renders individual matching plants on DOM and handles the select plant function
export const SelectPlantCard = ({ plant }) => {
    const { addPlant } = useContext(PlantContext)
    const newPlant = plant.plant_details.common_names ? plant.plant_details.common_names[0] : null
    const classes = useStyles();

    // when the user selects whichever plant is theirs, the data is sent to my 
    // API and a plantId is created. When the data comes back, we grab the plant id
    // and they are sent to the create post form for that specific plant.
    const handleCreatePost = () => {
        addPlant({
            commonName: newPlant,
            scientificName: plant.plant_details.scientific_name,
            description: plant.plant_details.wiki_description.value,
            image: plant?.similar_images[0].url,
        })
    }

    return (

        <div className="selectPlantCard" value={plant.id}>
            <h4 style={{ textTransform: 'capitalize' }}>Scientific Name: {plant.plant_details.scientific_name}</h4>
            <div className="imageAlign">
                <img className="selectImage" src={plant?.similar_images[0].url}></img>
            </div>
            <p className="alignButton">
                <button onClick={handleCreatePost}>This is my plant!</button>
            </p>
            {/* if the plant has no common names, this area will not display on DOM */}
            {plant.plant_details.common_names !== null ? <p style={{ textTransform: 'capitalize' }}>Common Name: {plant.plant_details.common_names[0]}</p> : ""}
            <p>{plant.plant_details.wiki_description.value}</p>
            
            
        </div>



        // <Grid item xs={6} sm={4} md={3} lg={2}>
        //     <Card className="selectPlantCard" value={plant.id} style={{ backgroundColor: "#13636e" }}>
        //         <CardActionArea>
        //             <CardMedia
        //                 className={classes.media}
        //                 image={plant?.similar_images[0].url}
        //             />

        //             <CardContent>
        //                 <Typography gutterBottom variant="h5" component="h2" style={{ textTransform: 'capitalize', color: "#1e2745" }}>
        //                     Scientific Name: {plant.plant_details.scientific_name}
        //                 </Typography>

        //                 <Typography variant="h6" color="textSecondary" component="p">
        //                     {plant.plant_details.common_names !== null ? <p style={{ textTransform: 'capitalize' }}>Common Name: {plant.plant_details.common_names[0]}</p> : ""}
        //                 </Typography>

        //                 <Typography variant="body3" color="textSecondary" component="p">
        //                     {plant.plant_details.wiki_description.value}
        //                 </Typography>
        //             </CardContent>

        //             <CardActions>
        //                 <Button onClick={handleCreatePost} variant="contained" size="small" style={{color: "#1e2745"}} >
        //                     This is my plant!
        //             </Button>
        //             </CardActions>
        //         </CardActionArea>
        //     </Card>
        // </Grid>
    )
}

