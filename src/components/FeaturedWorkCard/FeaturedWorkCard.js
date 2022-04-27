import {Card, CardContent, Typography, Hidden, CardMedia, CardActionArea} from '@material-ui/core';
import Moment from 'react-moment';
// import classes from './FeaturedWorkCard.css';
import {createDescription, stripHTML} from '../../util/StringUtils'
import {makeStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";
import classes from "../BlogItem/BlogItem.css";


const FeaturedWorkCard = (props) => {
    const useStyles = makeStyles(theme => ({
        cardItem: {
            backgroundImage: `url(${props.image})`,
            backgroundSize: 'cover',
            zIndex: 2,
            display: 'flex',
            paddingBottom: '0',
            height: '200px',
            textAlign: 'center',

            '&:hover': {
                filter: 'grayscale(50%) blur(1px)',
                transition: '.4s ease-in-out',
            }
        },
        cardText: {
            zIndex: 3,
            color: '#262626',
        }
    }));

    const classes = useStyles();

    return (<Card variant={"outlined"} onClick={() => console.log("Ollk")} className={classes.cardItem}>
        <CardMedia className={classes.cardImage} title='Image Title'/>
        <CardActionArea>
            <CardContent>
                <Typography variant="h6" className={classes.cardText}>
                    {props.title}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>);
}

FeaturedWorkCard.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string,
        image: PropTypes.string,
    })
}

export default FeaturedWorkCard;