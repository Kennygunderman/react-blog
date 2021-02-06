import React from 'react';
import Aux from '../hoc/Auxiliary';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import classes from './Layout.css';

const layout = (props) => (
    <Aux>
        <AppBar position='static'>
            <Toolbar variant='regular' color='primary'>
                <Typography variant='h6'>Kenny Gunderman</Typography>
            </Toolbar>
        </AppBar>
        <main className={classes.Container}>
            {props.children}
        </main>
        <div className={classes.Footer}></div>
    </Aux>
)

export default layout;