import { Card, CardContent, Typography, Hidden, CardMedia, CardActionArea } from '@material-ui/core';
import classes from './BlogItem.css';

import placeHolder from '../../../src/assets/placeholder.png'


const handleClick = () => {
    console.log("Card Clicked")
}

const blogItem = (props) => (
    <Card onClick={handleClick} className={classes.BlogCardItem}>
        <Hidden xsDown>
            <CardMedia className={classes.Media} image={placeHolder} title='Image Title' />
        </Hidden>
        <CardActionArea>
            <CardContent>
                <Typography component="h2" variant="h5">
                    Blog Title
              </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    Feb. 4th 2021
                </Typography>
                <Typography variant="subtitle1" paragraph>
                    This is a test description for a blog item. hur dee der dee burp.
                </Typography>
                <Typography variant="subtitle1" color="primary">
                    Continue reading...
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
)

export default blogItem;