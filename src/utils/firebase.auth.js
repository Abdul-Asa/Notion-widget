import { app } from './firebase.config.js';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendEmailVerification,
} from 'firebase/auth';

const authentication = getAuth(app);
const signupFunction = async ({ email, password }) => {
  // sendEmailVerification(authentication);
  //Add this later
  return createUserWithEmailAndPassword(authentication, email, password);
};

const loginFunction = async ({ email, password }) => {
  return signInWithEmailAndPassword(authentication, email, password);
};
const logout = () => {
  signOut(authentication);
};
export { signupFunction, loginFunction, authentication, logout };
