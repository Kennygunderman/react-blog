import {Card, CardContent, Typography, CardActionArea} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";

const FeaturedWorkCard = (props) => {
    const useStyles = makeStyles(theme => ({
        cardItem: {
            backgroundImage: `url(${props.image})`,
            backgroundSize: 'cover',
            display: 'flex',
            height: '200px',
            textAlign: 'center',

            '&:hover': {
                filter: 'grayscale(50%) blur(1px)',
                transition: '.4s ease-in-out',
            }
        },
        cardText: {
            color: '#262626',
        }
    }));

    const classes = useStyles();

    return (<Card variant={"outlined"} onClick={() => props.clickHandler()} className={classes.cardItem}>
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
    clickHandler: PropTypes.func,
    title: PropTypes.string,
    image: PropTypes.string,
};

export default FeaturedWorkCard;