import {Card, CardContent, Typography, CardActionArea, CardMedia} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";

const FeaturedWorkCard = (props) => {
    const useStyles = makeStyles(theme => ({
        cardContent: {
            backgroundImage: `url(${props.image})`,
            backgroundSize: 'cover',
            backgroundColor: 'transparent',
            border: 'none',
            display: 'flex',
            textAlign: 'center',
            height: '200px',
            '&:hover': {
                filter: 'grayscale(100%)',
                transition: '.4s ease-in-out',
            }
        },
        cardText: {
            color: '#1a1818',
        }
    }));

    const classes = useStyles();

    return (
        <Card variant={"outlined"} onClick={() => props.clickHandler()} className={classes.cardContent}>
            <CardActionArea>
                <CardContent>
                    <Typography variant="h6" className={classes.cardText}>
                        {props.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

FeaturedWorkCard.propTypes = {
    clickHandler: PropTypes.func,
    title: PropTypes.string,
    image: PropTypes.string,
};

export default FeaturedWorkCard;