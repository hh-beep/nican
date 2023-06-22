import {  initializeApp  } from "firebase/app";
import {  getStorage  } from "firebase/storage";
import {  getAnalytics  } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyAfsdT-DzgM2SNeNSeEDyJ9r863VyllVxQ",
  authDomain: "nican-810e4.firebaseapp.com",
  projectId: "nican-810e4",
  storageBucket: "nican-810e4.appspot.com",
  messagingSenderId: "44932467054",
  appId: "1:44932467054:web:8a5a29981d3d6a6648197f",
  measurementId: "G-9NMZ0VFJQV"
};


export default function initializeFirebase() {
  const app = initializeApp(  firebaseConfig  )

  initializeApp(  firebaseConfig  )
  getStorage(  app  )
  getAnalytics(  app  )
}