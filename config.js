import firebase from "firebase"

//Paste The Config here
const firebaseConfig = {
    apiKey: "AIzaSyDtjcIiov5f-FSwNlWv_uFB4t0CYbdwDHI",
    authDomain: "e-ride-stage-4-9494c.firebaseapp.com",
    projectId: "e-ride-stage-4-9494c",
    storageBucket: "e-ride-stage-4-9494c.appspot.com",
    messagingSenderId: "922872849536",
    appId: "1:922872849536:web:446869fb426665c8acb265"
  };



firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


