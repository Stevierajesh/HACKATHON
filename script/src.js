// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDlO4a5nSE9sDFy1t4Z31u8BdmeYQ2b18",
  authDomain: "csproj1-b4de7.firebaseapp.com",
  databaseURL: "https://csproj1-b4de7-default-rtdb.firebaseio.com",
  projectId: "csproj1-b4de7",
  storageBucket: "csproj1-b4de7.appspot.com",
  messagingSenderId: "445466382978",
  appId: "1:445466382978:web:864132255c8cd147cc9a9b",
  measurementId: "G-ZBPLMV9ME5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);