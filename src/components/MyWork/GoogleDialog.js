import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import Slide from '@mui/material/Slide';
import {TransitionProps} from '@mui/material/transitions';
import {Button, DialogTitle, Typography} from "@material-ui/core";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<any>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function GoogleDialog(props) {
    return (
        <div>
            <Dialog
                maxWidth={'md'}
                fullWidth={true}
                open={props.open}
                TransitionComponent={Transition}
                keepMounted
                onClose={props.handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Google"}</DialogTitle>
                <div style={{marginLeft: '10%', width: '80%', marginTop: 16}}>
                    <Typography variant="body2"
                                color="primary">{
                        "I worked on a native Android mobile app for Google’s Cloud Next 2020 event " +
                        "(before it was cancelled due to Covid) that allowed users to view upcoming talks, " +
                        "create a schedule, book appointments with Google “Experts” and schedule meetings " +
                        "with other conference attendees. Developed with a focus on realtime data, offline support, and Material Design."
                    }</Typography>
                    <br/>
                    <Typography variant="body2"
                                color="primary"><b>{"Technologies used: "}</b><i>{"Kotlin, Firestore, Dagger 2, Retrofit, RxJava, JUnit"}</i></Typography>
                </div>

                <DialogActions>
                    <Button onClick={props.handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}