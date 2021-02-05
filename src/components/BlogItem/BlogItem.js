import { Card, CardContent, Typography, Hidden, CardMedia, CardActionArea } from '@material-ui/core';
import Moment from 'react-moment';
import classes from './BlogItem.css';
import PropTypes from 'prop-types';
import { createDescription } from '../../util/StringUtils'

const blogItem = (props) => (
    <Card onClick={() => props.clickHandler(props.item)} className={classes.BlogCardItem}>
        <Hidden xsDown>
            <CardMedia className={classes.Media} image={props.item.image} title='Image Title' />
        </Hidden>
        <CardActionArea>
            <CardContent>
                <Typography component="h2" variant="h5">
                    {props.item.title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    <Moment format="MMM. D, YYYY">{props.item.date}</Moment>
                </Typography>
                <Typography variant="subtitle1" paragraph>
                    {createDescription(props.item.summary, 100)}
                </Typography>
                <Typography variant="subtitle1" color="primary">
                    Continue reading...
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
)

blogItem.propTypes = {
    item: PropTypes.shape({
        date: PropTypes.any,
        title: PropTypes.string,
        summary: PropTypes.string,
        image: PropTypes.string
    })
}

export default blogItem;