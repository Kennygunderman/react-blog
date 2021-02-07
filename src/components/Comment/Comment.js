import { Typography } from '@material-ui/core';
import Moment from 'react-moment';
import classes from './Comment.css';
const comment = (props) => (
    <div>
        <img alt="" src={props.comment.profilePhotoUrl} className={classes.ProfileImg} />
        <div className={classes.Container}>
            <Typography>
                <b>{props.comment.displayName}</b>
            </Typography>
            <Typography variant='body1' color="textSecondary" className={classes.Date}>
                <Moment format="MMM. D, YYYY">{props.comment.date}</Moment>
            </Typography>
            <Typography variant='body1' className={classes.Text}>
                {props.comment.comment}
            </Typography>
        </div>
    </div>
);

export default comment;