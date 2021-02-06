import { Card, CardContent, Typography, Hidden, CardMedia, CardActionArea } from '@material-ui/core';
import Aux from '../../hoc/Auxiliary';
import Comment from '../Comment/Comment';
import classes from './Comments.css';

const comments = (props) => (
    <Aux>
        <div className={classes.Divider} />
        <Typography variant="subtitle1" className={classes.NumberOfComments}>4 Comments</Typography>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <div className={classes.Footer} />
    </Aux>
);

export default comments;