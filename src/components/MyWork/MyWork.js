import {Grid, Typography} from "@material-ui/core";
import FeaturedWorkCard from "../FeaturedWorkCard/FeaturedWorkCard";
import * as React from "react";
import TMTDialog from "./TMTDialog";

import truckImage from "../../assets/truck_company.png";
import placeholderImage1 from "../../assets/placeholder_1.jpg";
import placeholderImage2 from "../../assets/placeholder_2.jpg";

export default function MyWork() {
    const [openTmtDialog, setOpenTmtDialog] = React.useState(false);

    return (
        <div>
            <TMTDialog open={openTmtDialog} handleClose={() => setOpenTmtDialog(false)}/>
            <Typography variant="h4" color="secondary" style={{marginBottom: 24}}>MY WORK</Typography>
            <Grid container spacing={1}>
                <Grid item xs={12} md={6}>
                    <FeaturedWorkCard image={placeholderImage1} title={"Place Holder Item 1"} clickHandler={() => { console.log("coming soon...") }} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <FeaturedWorkCard image={placeholderImage2} title={"Place Holder Item 2"} clickHandler={() => { console.log("coming soon...") }}  />
                </Grid>
                <Grid item xs={12} md={12}>
                    <FeaturedWorkCard image={truckImage} title={"MOVING COMPANY"} clickHandler={() => { setOpenTmtDialog(true) }}/>
                </Grid>
            </Grid>
        </div>
    );
}