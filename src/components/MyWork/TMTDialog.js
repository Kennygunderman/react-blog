import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import Slide from '@mui/material/Slide';
import {TransitionProps} from '@mui/material/transitions';
import {Button, DialogTitle, Typography} from "@material-ui/core";
import signatureScreenImg from '../../assets/tmt_sig_1080.png';
import paymentScreenImg from '../../assets/tmt_payment_1080.png';
import formScreenImg from '../../assets/tmt_packing_form_1080.png';
import {ImageCarousel} from "./ImageCarousel";


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
                maxWidth={'lg'}
                fullWidth={true}
                open={props.open}
                TransitionComponent={Transition}
                keepMounted
                onClose={props.handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"MOVING COMPANY"}</DialogTitle>
                <ImageCarousel images={[signatureScreenImg, paymentScreenImg, formScreenImg]}/>
                <div style={{marginLeft: '10%', width: '80%', marginTop: 16}}>
                    <Typography variant="body2"
                                color="primary">{
                        "During my time at Moving Company, I developed key features " +
                        "for Moving Company's flagship Mobile Application - Digital Sales Order. Digital Sales Order " +
                        "in a native Android app written in Kotlin with a heavy focus on offline support. " +
                        "Digital Sales Order allows customers to agree to legal forms and make payments related to the services they purchases."
                    }</Typography>
                    <br/>
                    <Typography variant="body2"
                                color="primary"><b>{"Technologies used: "}</b><i>{"Kotlin, Realm Database, Dagger 2, Retrofit, RxJava, JUnit, Espresso"}</i></Typography>
                </div>

                <DialogActions>
                    <Button onClick={props.handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}