import classes from './Home.css';
import {Button, Typography, Fade} from '@material-ui/core';
import React, {useState, useEffect} from 'react';

const Home = (props) => {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        let timer = 1;
        const interval = setInterval(() => {
            console.log(timer);
            if (--timer < 1) {
                setShowButton(true);
                clearInterval(interval);
            }
        }, 500);
    });

    return (
        <div className={classes.Page}>
            <div className={classes.WelcomeContainer}>
                <div className={classes.Center}>
                    <Fade in timeout={{enter: 1500}}>
                        <Typography variant="h2" color="secondary"><b>Welcome</b></Typography>
                    </Fade>
                    {showButton ? <Fade in timeout={{enter: 2000}}>
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={() => props.history.push('/Blog')}
                            className={classes.BlogButton}>
                            How I learned react in 7 days
                        </Button>
                    </Fade> : <Button className={classes.BlogButtonHidden}>Hidden</Button>}
                </div>
            </div>

        </div>
    )
}

export default Home;