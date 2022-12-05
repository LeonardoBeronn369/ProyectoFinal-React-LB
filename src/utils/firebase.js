import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyAYOtyoWNyAgpWokHF1oxrLsOu7GWgjwRg",
  authDomain: "react-coder-31809.firebaseapp.com",
  projectId: "react-coder-31809",
  storageBucket: "react-coder-31809.appspot.com",
  messagingSenderId: "403693904161",
  appId: "1:403693904161:web:9c401dcd61edb3ebf75e60"
};

const app = initializeApp(config);
export const db = getFirestore(app);