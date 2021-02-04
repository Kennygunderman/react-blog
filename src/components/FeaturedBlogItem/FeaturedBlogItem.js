import { Card, CardContent, Typography, CardMedia, CardActionArea, Button } from '@material-ui/core';
import classes from './FeaturedBlogItem.css';
import placeHolder from '../../../src/assets/placeholder.png'

const handleClick = () => {
    console.log("Featured Item Clicked")
}

const featuredBlogItem = (props) => (
    <Card onClick={handleClick} className={classes.FeaturedBlogCardItem}>
        <CardMedia image={placeHolder} title='Image Title'>
            <CardActionArea className={classes.Overlay}>
                <CardContent className={classes.CardContent}>
                    <Typography component="h2" variant="h3" className={classes.Header}>
                        Featured Blog Title
                    </Typography>
                    <Typography variant="h5" className={classes.Desc}>
                        This is a test description for a Featured blog item. hur dee der dee burp dee turd merd cheese curd.
                    </Typography>
                    <Typography variant="subtitle1" className={classes.ContinueReadingText} color="inherit">
                        Continue reading...
                    </Typography>
                </CardContent>
            </CardActionArea>
        </CardMedia>
    </Card>
)

export default featuredBlogItem;