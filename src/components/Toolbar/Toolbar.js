import { AppBar, Toolbar, Typography, Box, Button } from '@material-ui/core';
import { auth, signOut } from '../../auth/auth'
import { connect } from 'react-redux';
import actions from '../../store/actions';

const handleAuth = (onAuthUser) => {
    const success = (token, user) => {
        onAuthUser({ isAuthed: true, user: user, token: token });
    }

    const failure = (message) => {
        alert("auth failed: " + message);
    }

    auth(success, failure)
}

const handleSignOut = (onAuthUser) => {
    const success = (token, user) => {
        onAuthUser({ isAuthed: false, user: null, token: null });
    }

    const failure = (error) => {
        alert("sign out failed: " + error);
    }

    signOut(success, failure);
}

const toolbar = (props) => (
    <AppBar position='static'>
        <Toolbar variant='regular' color='primary'>
            <Box display='flex' flexGrow={1}>
                <Typography variant='h6'>Kenny Gunderman</Typography>
            </Box>

            <Button
                variant="outlined"
                color="secondary"
                onClick={props.isAuthed ? () => handleSignOut(props.onAuthUser) : () => handleAuth(props.onAuthUser)}>
                {!props.isAuthed ? 'Sign in' : 'Sign out'}
            </Button>

        </Toolbar>
    </AppBar>
)

const mapStateToProps = state => {
    return {
        isAuthed: state.isAuthed,
        user: state.user,
        userToken: state.userToken
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAuthUser: (payload) => dispatch({ type: actions.AUTH, payload: payload })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(toolbar);