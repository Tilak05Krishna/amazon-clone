import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  //Add firebase config
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
