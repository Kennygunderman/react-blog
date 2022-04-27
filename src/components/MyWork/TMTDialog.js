import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import {TransitionProps} from '@mui/material/transitions';
import {Button, DialogTitle, Typography} from "@material-ui/core";
import aboutMeImage from "../../assets/about_me_image.png"

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<any>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function TMTDialog(props) {
    return (
        <div>
            <Dialog
                open={props.open}
                TransitionComponent={Transition}
                keepMounted
                onClose={props.handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"TWO MEN AND A TRUCK"}</DialogTitle>
                <DialogContent>
                    <div style={{
                        margin: 'auto',
                        width: 300,
                        height: 300,
                        borderRadius: 150,
                        marginBottom: 16,
                        backgroundSize: 'cover',
                        backgroundImage: `url(${aboutMeImage})`
                    }}/>
                    <Typography variant="body2"
                                color="primary">{"Hey, I'm Kenny. I'm a Software Engineer based out of Chicago, IL."}</Typography>
                    <br/>
                    <Typography variant="body2"
                                color="primary">{"I've been writing code professionally for over 6 years with a focus in native Android development and cross-platform using react-native."}</Typography>
                    <br/>
                    <Typography variant="body2"
                                color="primary">{"In my free time I make content on YouTube related to programming to help guide and inspire future Software Developers."}</Typography>
                    <br/>
                    <Typography variant="body2"
                                color="primary"><b>{"Contact:"}</b></Typography>
                    <Typography variant="body2"
                                color="primary"><i>email - </i>{"contact@kgunderman.com"}</Typography>
                    <Typography variant="body2"
                                color="primary"><i>phone - </i>{"1 (543) 328-1217"}</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}