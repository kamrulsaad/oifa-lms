import { initializeApp, firebase } from "firebase/app";
import firebaseConfig from "./firebase.config";

function firebaseInitialization() {
  if(!firebase?.apps?.length) {
    initializeApp(firebaseConfig)
  }
}

export default firebaseInitialization;