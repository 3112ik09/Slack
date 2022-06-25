import firebase from "firebase";
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBqY0bb7FO4XSlzIj-zEijmE9NdKIKInfA",
    authDomain: "chat-app-ec1c8.firebaseapp.com",
    projectId: "chat-app-ec1c8",
    storageBucket: "chat-app-ec1c8.appspot.com",
    messagingSenderId: "824974409752",
    appId: "1:824974409752:web:c332113369a9ada91a836d",
    measurementId: "G-504HNBCHVY"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export { auth, provider };
  export default db;