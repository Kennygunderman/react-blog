import {Grid, Typography} from "@material-ui/core";
import FeaturedWorkCard from "../FeaturedWorkCard/FeaturedWorkCard";
import * as React from "react";
import TMTDialog from "./TMTDialog";

export default function MyWork() {
    const google = "https://firebasestorage.googleapis.com/v0/b/web-app-d1952.appspot.com/o/portfolio-imgs%2FGC_NEXT-Blog-Header_V1.max-2200x2200.png?alt=media&token=d7991ec2-f82d-47bb-946c-1dbdd14d4ec1";
    const [openTmtDialog, setOpenTmtDialog] = React.useState(false);

    return (
        <div>
            <TMTDialog open={openTmtDialog} handleClose={() => setOpenTmtDialog(false)}/>
            <Typography variant="h4" color="secondary" style={{marginBottom: 24}}>MY WORK</Typography>
            <Grid container spacing={1}>
                <Grid item xs={12} md={6}>
                    <FeaturedWorkCard image={google} title={"Purina"} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <FeaturedWorkCard image={google} title={"Google"}/>
                </Grid>
                <Grid item xs={12} md={12}>
                    <FeaturedWorkCard image={google} title={"TWO MEN AND A TRUCK"} clickHandler={() => { setOpenTmtDialog(true) }}/>
                </Grid>
            </Grid>
        </div>
    );
}