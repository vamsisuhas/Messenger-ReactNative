// import * as firebase from "firebase";
// import "firebase/firestore";
// import "firebase/auth";

import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBQwCcOJhGGbdLvYDn2yGHUQSxPZ_XD950",
    authDomain: "messengerapp-74646.firebaseapp.com",
    projectId: "messengerapp-74646",
    storageBucket: "messengerapp-74646.appspot.com",
    messagingSenderId: "1093326554239",
    appId: "1:1093326554239:web:b08e22dd299928532a6b4a",
    measurementId: "G-ENNTG5KS81"
  };

  let app;

  if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig)
  } else{
    app = firebase.app();
  }
 
  export const db = app.firestore();
  export const auth = firebase.auth();



