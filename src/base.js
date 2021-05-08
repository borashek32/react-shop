import Rebase from 're-base';
import firebase from 'firebase/app';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCKet1oFBWyjNjzGN5b0-hVyDf0ViV1gPM",
  authDomain: "very-hot-burgers-7a2a2.firebaseapp.com",
  databaseURL: "https://very-hot-burgers-7a2a2-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
}

initFirebase();

export { firebaseApp };

export default base;

