import firebase from 'firebase/app'
import 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBTXjgfFvii2nxU05uZFcedh3PNCyy87S8",
    authDomain: "vuex-notes-d9f72.firebaseapp.com",
    databaseURL: "https://vuex-notes-d9f72.firebaseio.com",
    projectId: "vuex-notes-d9f72",
    storageBucket: "vuex-notes-d9f72.appspot.com",
    messagingSenderId: "774907129389",
    appId: "1:774907129389:web:f380d7e4f7c573a96a52a4"
};
// Initialize Firebase
//firebase.initializeApp(firebaseConfig);
export const db = firebase
    .initializeApp(firebaseConfig)
    .firestore()

const { TimeStamp, GeoPoint } = firebase.firestore
export { TimeStamp, GeoPoint }