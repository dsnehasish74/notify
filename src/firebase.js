import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCHfLD9nKE2zqn1_6iUKF-X5j5CNqizN7w",
  authDomain: "notify-8fd26.firebaseapp.com",
  projectId: "notify-8fd26",
  storageBucket: "notify-8fd26.appspot.com",
  messagingSenderId: "400529431450",
  appId: "1:400529431450:web:f17675f40c108f5f2db823",
  measurementId: "G-L2XLV5VGMH"
};

firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider(); 
var db = firebase.firestore();
var storage=firebase.storage();
export {auth , provider, db, storage};