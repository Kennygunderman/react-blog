import { Card, CardContent, Typography, Hidden, CardMedia, CardActionArea } from '@material-ui/core';
import Moment from 'react-moment';
import classes from './BlogItem.css';
import PropTypes from 'prop-types';
import { createDescription, stripHTML } from '../../util/StringUtils'

const blogItem = (props) => (
    <Card onClick={() => props.clickHandler(props.item)} className={classes.BlogCardItem}>
        {
            props.hideImg != null && props.hideImg === true ? null :
                <Hidden xsDown>
                    <CardMedia className={classes.Media} image={props.item.thumbnail} title='Image Title' />
                </Hidden>
        }
        <CardActionArea>
            <CardContent>
                <Typography variant="h6">
                    {props.item.title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    <Moment format="MMM. D, YYYY">{props.item.date}</Moment>
                </Typography>
                <Typography variant="body1" paragraph>
                    {createDescription(stripHTML(props.item.summary), 100)}
                </Typography>
                <Typography variant="body1" className={classes.ContinueReadingText}>
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