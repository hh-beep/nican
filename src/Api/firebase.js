import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";


//  -- Informations do firebase criado no .env do projeto (nao aparece no github) --  //
const env = import.meta.env;



const sdk = {
  apiKey:             env.VITE_FIREBASE_API_KEY,
  authDomain:         env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL:        env.VITE_FIREBASE_DATABASE_URL,
  projectId:          env.VITE_FIREBASE_PROJECT_ID,
  storageBucket:      env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:  env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId:              env.VITE_FIREBASE_APP_ID,
  measurementId:      env.VITE_FIREBASE_MEASUREMENT_ID 
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
