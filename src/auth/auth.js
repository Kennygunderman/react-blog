import firebase from "../firebase";
const auth = (success, failure) => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;
            var token = credential.accessToken;
            var user = result.user;
            success(token, user)
        }).catch((error) => {
            console.log(error);
            var errorMessage = error.message;
            failure(errorMessage)
        });
}

const signOut = (success, failure) => {
    firebase.auth().signOut().then(() => {
        success();
    }).catch((error) => {
        console.log(error);
        failure(error);
    });
}

export { auth, signOut };