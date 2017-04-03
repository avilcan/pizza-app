import firebase from 'firebase';
// Set the configuration for your app
// TODO: Replace with your project's config object
var config = {
    apiKey: "AIzaSyDxFY9VeVgcPBWifxCMnrcvW47tXV6mVjk",
    authDomain: "pizza-app-cc325.firebaseapp.com",
    databaseURL: "https://pizza-app-cc325.firebaseio.com",
};
firebase.initializeApp(config);

// Get a reference to the database service
export default firebase.database();