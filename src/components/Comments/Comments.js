import { Typography } from '@material-ui/core';
import Aux from '../../hoc/Auxiliary';
import Comment from '../Comment/Comment';
import LeaveComment from '../../containers/LeaveComment/LeaveComment';
import classes from './Comments.css';

const comments = (props) => {
    return (
        <Aux>
            <div className={classes.Divider} />
            <Typography variant="subtitle1" className={classes.NumberOfComments}>{props.comments.length} Comments</Typography>
            <LeaveComment postId={props.postId} />
            {props.comments.map((comment) => <Comment key={comment.id} comment={comment} />)}
            <div className={classes.Footer} />
        </Aux>
    )
};

export default comments;