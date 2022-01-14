import firebase from "firebase";

// Configure Firebase.
export const firebaseConfig = {
  apiKey: "AIzaSyBMPUhguuWgADohgDx4FoW7JQi06fSMdTg",
  authDomain: "reasonloop.firebaseapp.com",
  projectId: "reasonloop",
  storageBucket: "reasonloop.appspot.com",
  messagingSenderId: "302805922743",
  appId: "1:302805922743:web:044f37d86f85cee267ae32",
  databaseURL: "https://reasonloop-default-rtdb.firebaseio.com/",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
