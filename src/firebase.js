import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

//firebase init- add your own configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMGG24GNp7kF1XYGlfRnLFGdhYenHsG5I",
  authDomain: "vue-app-88883.firebaseapp.com",
  projectId: "vue-app-88883",
  storageBucket: "vue-app-88883.appspot.com",
  messagingSenderId: "611689195929",
  appId: "1:611689195929:web:2489bc4761cc6bf0f94b08"
};
firebase.initializeApp(firebaseConfig);

//utils
const db = firebase.firestore();
const auth = firebase.auth();

// collection references
const usersCollection = db.collection("users");
const postsCollection = db.collection("posts");
const commentsCollection = db.collection("comments");
const likesCollection = db.collection("likes");

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
};
