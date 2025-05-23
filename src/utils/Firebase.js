
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCpX2N2RQKyt65msvcXJ5U9UXyoQKgd_ys",
//   authDomain: "netflix-gpt-6c392.firebaseapp.com",
//   projectId: "netflix-gpt-6c392",
//   storageBucket: "netflix-gpt-6c392.appspot.com",
//   messagingSenderId: "641315283990",
//   appId: "1:641315283990:web:f14d451accbcf966910137",
//   measurementId: "G-ZKQ6Y0Q917"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export const auth=getAuth();
// export const db=getFirestore(app);
// export default app;


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-9yHL6LBoFSsVzro5uxrKH9kn6KjL7BE",
  authDomain: "netflix-gpt-783c8.firebaseapp.com",
  projectId: "netflix-gpt-783c8",
  storageBucket: "netflix-gpt-783c8.appspot.com",
  messagingSenderId: "876419813984",
  appId: "1:876419813984:web:13ef85377d937d374ce905",
  measurementId: "G-Q19BDFXFDP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();