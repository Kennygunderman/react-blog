import {Grid, Typography} from "@material-ui/core";
import FeaturedWorkCard from "../FeaturedWorkCard/FeaturedWorkCard";
import * as React from "react";
import TMTDialog from "./TMTDialog";

import truckImage from "../../assets/truck_company_2.png";
import petfinderImage from "../../assets/petfinder.png";
import googleImage from "../../assets/google_next.png";
import GoogleDialog from "./GoogleDialog";
import PetfinderDialog from "./PetfinderDialog";

export default function MyWork() {
    const [openTmtDialog, setOpenTmtDialog] = React.useState(false);
    const [openGoogleDialog, setOpenGoogleDialog] = React.useState(false);
    const [openPetfinderDialog, setOpenPetfinderDialog] = React.useState(false);

    return (
        <div>
            <TMTDialog open={openTmtDialog} handleClose={() => setOpenTmtDialog(false)}/>
            <GoogleDialog open={openGoogleDialog} handleClose={() => setOpenGoogleDialog(false)}/>
            <PetfinderDialog open={openPetfinderDialog} handleClose={() => setOpenPetfinderDialog(false)}/>
            <Typography variant="h4" color="secondary" style={{marginBottom: 24}}>MY WORK</Typography>
            <Grid container spacing={1}>
                <Grid item xs={12} md={6}>
                    <FeaturedWorkCard image={petfinderImage} title={"Petfinder"} clickHandler={() => { setOpenPetfinderDialog(true) }} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <FeaturedWorkCard image={googleImage} title={"Google"} clickHandler={() => { setOpenGoogleDialog(true) }}  />
                </Grid>
                <Grid item xs={12} md={12}>
                    <FeaturedWorkCard image={truckImage} title={"TWO MEN AND A TRUCK"} clickHandler={() => { setOpenTmtDialog(true) }}/>
                </Grid>
            </Grid>
        </div>
    );
}