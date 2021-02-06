import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import Aux from '../../hoc/Auxiliary';
import classes from './DetailContent.css';
import Moment from 'react-moment';

const detailContent = (props) => (
    <Aux>
        <Typography variant="h6">
            {props.title}
        </Typography>
        <div className={classes.Divider} />
        <Typography variant="subtitle1" color="textSecondary" className={classes.Date}>
            <Moment format="MMM. D, YYYY">{props.date}</Moment>
        </Typography>
        <div className={classes.Text}>{props.children}</div>
    </Aux>
)

detailContent.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
}

export default detailContent;