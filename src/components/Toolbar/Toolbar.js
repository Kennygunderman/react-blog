import { AppBar, Toolbar, Typography, Box, Button } from '@material-ui/core';
import { auth, signOut } from '../../auth/auth'
import { connect } from 'react-redux';
import { AUTH } from '../../store/actions';
import firebase from '../../firebase';

const handleAuth = (onAuthUser) => {
    const success = (token, user) => {
        console.log(token, user);
        onAuthUser({ isAuthed: true, user: user, token: token });
    }

    const failure = (message) => {
        console.log("auth failed: " + message);
    }

    auth(success, failure)
}

const handleSignOut = (onAuthUser) => {
    const success = () => {
        onAuthUser({ isAuthed: false, user: null });
    }

    const failure = (error) => {
        alert("sign out failed: " + error);
    }

    signOut(success, failure);
}

const toolbar = (props) => {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            props.onAuthUser({ isAuthed: true, user: user });
        }
    });

    return (<AppBar position='static'>
        <Toolbar variant='regular' color='primary'>
            <Box display='flex' flexGrow={1}>
                <Typography variant='h6'>Kenny Gunderman</Typography>
            </Box>

            <Button
                variant="outlined"
                color="secondary"
                onClick={props.isAuthed ? () => handleSignOut(props.onAuthUser) : () => handleAuth(props.onAuthUser)}>
                {props.isAuthed ? 'Sign out' : 'Sign in'}
            </Button>

        </Toolbar>
    </AppBar>)
}

const mapStateToProps = state => {
    return {
        isAuthed: state.isAuthed,
        user: state.user
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAuthUser: (payload) => dispatch({ type: AUTH, payload: payload })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(toolbar);