import {Card, CardContent, Typography, CardActionArea} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";

const FeaturedWorkCard = (props) => {
    const useStyles = makeStyles(theme => ({
        cardItem: {
            opacity: '0.95',
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
        text: {
           color: '#fff',
        }
    }));

    const classes = useStyles();

    return (<Card variant={"outlined"} onClick={() => props.clickHandler()} className={classes.cardItem}>
        <CardActionArea>
            <CardContent>
                <Typography variant="h6" className={classes.text}>
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