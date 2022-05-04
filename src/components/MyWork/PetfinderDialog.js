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

export default function PetfinderDialog(props) {
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
                <DialogTitle>{"Petfinder"}</DialogTitle>
                <div style={{marginLeft: '10%', width: '80%', marginTop: 16}}>
                    <Typography variant="body2"
                                color="primary">{
                        "Petfinder is a platform home to hundreds of thousands of adoption and foster organizations for pets across the United States. " +
                        "Petfinder allows users to search for pets that are best suited for them. My role on this project has been to maintain and optimize " +
                        "the user experience for key features on both iOS and Android such as pet search, breed search, and user profile."
                    }</Typography>
                    <Typography>View on <a href={'https://apps.apple.com/us/app/petfinder-adopt-a-pet/id557228073'}>Apple Store</a> & <a href={'https://play.google.com/store/apps/details?id=com.discovery.petfinder'}>Google Play</a></Typography>
                    <br/>
                    <Typography variant="body2"
                                color="primary"><b>{"Technologies used: "}</b><i>{"React-Native, Typescript"}</i></Typography>
                </div>

                <DialogActions>
                    <Button onClick={props.handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}