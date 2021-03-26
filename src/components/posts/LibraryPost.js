import React from "react"
import { Link } from "react-router-dom"
import "./Library.css";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});
// renders each individual library post on the library page
export const LibraryPostCard = ({ post }) => {
    const classes = useStyles();

    return (
        <>
            {/* if the plant is not available, it will not render at all */}
            {post.available === true &&
                <Card className="postCards" style={{ backgroundColor: "#13636e" }}>
                    <CardActionArea>
                        <Link to={`/library/detail/${post.id}`}>
                            <CardMedia
                                className={classes.media}
                                image={post.plant?.image}
                            />
                        </Link>

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" style={{ color: "#1e2745" }}>
                                {post.plant?.scientificName}
                            </Typography>

                            <Typography variant="body2" color="textSecondary" component="p">
                                {post.plant?.commonName}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            }
        </>
    )
}


// <section className="postCards" id={post.id}>
//     <div>
//         <h3 style={{ textTransform: 'capitalize' }}>
//             {post.plant?.scientificName}
//         </h3>
//         <h4 style={{ textTransform: 'capitalize' }}>{post.plant?.commonName}</h4>

//         {/* This makes the image a clickable link to take user to details page */}
//         <Link to={`/library/detail/${post.id}`}>
//             <img className="image" src={post.plant?.image}></img>
//         </Link>
//     </div>
//     <div>
//         <h5>Available: {post.available === true ? "Yes" : "No"}</h5>
//     </div>
// </section> 