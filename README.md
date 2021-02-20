# Blog

### Getting started

create a file in the root project directory named
`firebase-config.js`
using the following template:

```
const firebaseConfig = {
    apiKey: FIREBASE_API_KEY_HERE,
    authDomain: FIREBASE_AUTH_DOMAIN_HERE,
    projectId: FIREBASE_PROJECT_ID_HERE,
    storageBucket: FIREBASE_STORAGE_BUCKET_HERE,
    messagingSenderId: FIREBASE_SENDER_ID_HERE,
    appId: FIREBASE_APP_ID_HERE,
    measurementId: FIREBASE_MEASUREMENT_ID_HERE
};

export default firebaseConfig;
```

### Firestore schema:

This app relies on the following Firestore schema:

###### posts
    - date
    - image
    - summary
    - thumbnail
    - title

###### comments
    - comment
    - date
    - displayName
    - postId
    - profilePhotorl
    - uid
