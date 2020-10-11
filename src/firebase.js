import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAIosgpF6OPNaiyl7n_yvQChrOmL6bX594",
    authDomain: "clone-10.firebaseapp.com",
    databaseURL: "https://clone-10.firebaseio.com",
    projectId: "clone-10",
    storageBucket: "clone-10.appspot.com",
    messagingSenderId: "396486780647",
    appId: "1:396486780647:web:108fd154ec05c3f2482442",
    measurementId: "G-LWB9P78FZK"
  }

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }