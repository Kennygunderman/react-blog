import { Card, CardContent, Typography, CardMedia } from '@material-ui/core';
import PropTypes from 'prop-types';
import classes from './DetailHeader.css';

const detailHeader = (props) => (
    <Card className={classes.DetailHeader}>
        <CardMedia image={props.image} title={'Thumbnail'}>
            <div className={classes.Overlay}>
                <CardContent className={classes.CardContent}>
                    <Typography variant="h3" className={classes.Header}>
                        {props.title}
                    </Typography>
                </CardContent>
            </div>
        </CardMedia>
    </Card>
)

detailHeader.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
}

export default detailHeader;