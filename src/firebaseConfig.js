import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDXyhwClrcmofhDUHcgZtLGQhZFJrWB-YY",
    authDomain: "todoapp-redux.firebaseapp.com",
    databaseURL: "https://todoapp-redux.firebaseio.com",
    projectId: "todoapp-redux",
    storageBucket: "todoapp-redux.appspot.com",
    messagingSenderId: "206032934372"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const database = firebase.database()
export const googleProvider = new firebase.auth.GoogleAuthProvider()