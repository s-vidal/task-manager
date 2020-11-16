import firebase from "firebase";

const config = {
  apiKey: "AIzaSyC7jg0c2E9KQgrsQ1jC04OAenXl9yaAWIU",
  authDomain: "task-manager-cbd6f.firebaseapp.com",
  databaseURL: "https://task-manager-cbd6f.firebaseio.com",
  projectId: "task-manager-cbd6f",
  storageBucket: "task-manager-cbd6f.appspot.com",
  messagingSenderId: "809179515093",
  appId: "1:809179515093:web:0c5cec0b323911d119ba5c",
  measurementId: "G-MW44H1TLK6",
};

const app = firebase.initializeApp(config);
const db = firebase.firestore(app);
const usersCollection = db.collection("users");

export {usersCollection};
