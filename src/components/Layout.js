import React from 'react';
import Aux from '../hoc/Auxiliary';
import classes from './Layout.css';
import Toolbar from './Toolbar/Toolbar';


const layout = (props) => (
    <Aux>
        <Toolbar />
        <main className={classes.Container}>
            {props.children}
        </main>
        <div className={classes.Footer}></div>
    </Aux >
)

export default layout;