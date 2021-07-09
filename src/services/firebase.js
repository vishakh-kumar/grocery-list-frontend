//TODO: import firebase npm package'
import firebase from "firebase/app";
//TODO: import the auth module from firebase
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAnzoz-0KeLbtw-5z50CCzRJR1VeKyYAys",
    authDomain: "grocery-list-b4997.firebaseapp.com",
    projectId: "grocery-list-b4997",
    storageBucket: "grocery-list-b4997.appspot.com",
    messagingSenderId: "525473605913",
    appId: "1:525473605913:web:1db081abca6d61d1353d88",
};

//TODO: initialize the firebase app
firebase.initializeApp(firebaseConfig);
//TODO: Set up provider for google sign in
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
//TODO: define login and logout actions
function login() {
    return auth.signInWithPopup(provider);
}
function logout() {
    return auth.signOut();
}
//TODO: export functionality(named export)
export { login, logout, auth };
