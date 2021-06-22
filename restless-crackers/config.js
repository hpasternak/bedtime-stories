 import * as firebase from 'firebase'
 require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyAvpwZ42A8rb9AMrfsfQwTVmtVXdta_L44",
    authDomain: "storyhub-f8955.firebaseapp.com",
    projectId: "storyhub-f8955",
    storageBucket: "storyhub-f8955.appspot.com",
    messagingSenderId: "561859449379",
    appId: "1:561859449379:web:3d33a01691a1d340fc5796"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()