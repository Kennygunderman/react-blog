import { AppBar, Toolbar as MaterialToolbar, Typography, Box, Button, Link } from '@material-ui/core';
import { auth, signOut } from '../../auth/auth'
import { connect } from 'react-redux';
import { AUTH } from '../../store/actions';
import firebase from '../../firebase';
import { withRouter } from 'react-router-dom';

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

const onHomeClicked = (history) => {
    history.push('/');
}

const toolbar = (props) => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in.
            props.onAuthUser({ isAuthed: true, user: user });
        }
    });

    return (
        <AppBar position='static'>
            <MaterialToolbar variant='regular' color='primary'>
                <Box display='flex' flexGrow={1}>
                    <Typography variant='h6'><Link href="#" onClick={() => onHomeClicked(props.history)} color="secondary">Kenny Gunderman</Link></Typography>
                </Box>

                <Button
                    variant="outlined"
                    color="secondary"
                    onClick={props.isAuthed ? () => handleSignOut(props.onAuthUser) : () => handleAuth(props.onAuthUser)}>
                    {props.isAuthed ? 'Sign out' : 'Sign in'}
                </Button>

            </MaterialToolbar>
        </AppBar>
    )
}

const mapStateToProps = state => {
    return {
        ...state,
        isAuthed: state.isAuthed,
        user: state.user
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAuthUser: (payload) => dispatch({ type: AUTH, payload: payload })
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(toolbar));