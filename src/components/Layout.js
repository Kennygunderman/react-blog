import React from 'react';
import Aux from '../hoc/Auxiliary'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

const layout = (props) => (
    <Aux>
        <AppBar position='static'>
            <Toolbar variant='regular' color='primary'>
                <Typography variant='h6'>Kenny Gunderman</Typography>
            </Toolbar>
        </AppBar>
        <main>
            {props.children}
        </main>
    </Aux>
)

export default layout;