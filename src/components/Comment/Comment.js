import { Card, CardContent, Typography, Hidden, CardMedia, CardActionArea } from '@material-ui/core';
import classes from './Comment.css';
const comment = (props) => (
    <div>
        <img src='https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y' className={classes.ProfileImg} />
        <div className={classes.Container}>
            <Typography>
                <b> Kenny Gunderman</b>
            </Typography>
            <Typography variant='body1' color="textSecondary" className={classes.Date}>
                Mar. 21, 2021
            </Typography>
            <Typography variant='body1'>
                This is a dummy stupid comment! I love this feature. Its dope. LOL
            </Typography>
        </div>
    </div>
);

export default comment;