// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCeA8VMdtQ0gwxs-yEbBDu9jt-rxdwecIQ",
    authDomain: "wddh-2022-notebook.firebaseapp.com",
    databaseURL: "https://wddh-2022-notebook-default-rtdb.firebaseio.com",
    projectId: "wddh-2022-notebook",
    storageBucket: "wddh-2022-notebook.appspot.com",
    messagingSenderId: "149160357384",
    appId: "1:149160357384:web:7e784928330e10eb582bbd"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app)