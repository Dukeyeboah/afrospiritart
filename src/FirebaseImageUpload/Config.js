import { initializeApp } from "firebase/app";
import { getStorage, getDownloadURL } from "firebase/storage";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCq2HAJkOStcOzlls2JcamlTQ7f_GhhA5Q",
  authDomain: "afrospiritart-54688.firebaseapp.com",
  projectId: "afrospiritart-54688",
  storageBucket: "afrospiritart-54688.appspot.com",
  messagingSenderId: "332883200168",
  appId: "1:332883200168:web:af631d336f25019d8d5a9d",
  measurementId: "G-BZZHZ8CXP6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const imageDB = getStorage(app)
//const imagesRef = ref(imageDB, "galleryImages");