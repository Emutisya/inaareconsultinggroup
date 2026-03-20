import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAUjtOS3DdjsRxzZqxCidu3dGm4aOfPY1E",
  authDomain: "inaare-consulting.firebaseapp.com",
  projectId: "inaare-consulting",
  storageBucket: "inaare-consulting.firebasestorage.app",
  messagingSenderId: "55649247758",
  appId: "1:55649247758:web:24d97244b7790cd722125f",
  measurementId: "G-0X1Q8BXJTQ"
};

export const app = initializeApp(firebaseConfig);

export const analyticsPromise =
  typeof window !== "undefined"
    ? isSupported().then((supported) => (supported ? getAnalytics(app) : null))
    : Promise.resolve(null);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
