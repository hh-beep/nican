import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";


const sdk = {
  apiKey: "AIzaSyAfsdT-DzgM2SNeNSeEDyJ9r863VyllVxQ",
  authDomain: "nican-810e4.firebaseapp.com",
  databaseURL: "https://nican-810e4-default-rtdb.firebaseio.com",
  projectId: "nican-810e4",
  storageBucket: "nican-810e4.appspot.com",
  messagingSenderId: "44932467054",
  appId: "1:44932467054:web:8a5a29981d3d6a6648197f",
  measurementId: "G-9NMZ0VFJQV"
};


const initFirebase = () => {
  const app = initializeApp;

  app(  sdk  )
  getDatabase(  app(sdk)  );
  getAnalytics(  app(sdk)  );
}

export default initFirebase;




//  Admin privileges
/*
var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://nican-810e4-default-rtdb.firebaseio.com"
});
*/