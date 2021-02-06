import actions from '../store/actions';

const initialState = {
    isAuthed: false,
    user: null,
    userToken: null
}

const reducer = (state = initialState, action) => {
    if (action.type == actions.AUTH) {
        return {
            isAuthed: action.payload.isAuthed,
            user: action.payload.user,
            userToken: action.payload.userToken
        }
    }

    return state;
};

export default reducer;