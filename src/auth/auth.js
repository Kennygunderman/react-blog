import firebase from "../firebase";

const auth = (success, failure) => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            const credential = result.credential;
            const token = credential.accessToken;
            const user = result.user;
            success(token, user)
        }).catch((error) => {
        console.log(error);
        const errorMessage = error.message;
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

export {auth, signOut};