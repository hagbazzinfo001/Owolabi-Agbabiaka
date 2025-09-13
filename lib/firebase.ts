import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC2cm0DM57owXYuU-0i1NXOevILvzdWwEA",
  authDomain: "my-portfolio-23bbc.firebaseapp.com",
  projectId: "my-portfolio-23bbc",
  storageBucket: "my-portfolio-23bbc.firebasestorage.app",
  messagingSenderId: "913749240629",
  appId: "1:913749240629:web:4a58e4b5e9de58a37dba7c",
  measurementId: "G-3YFFCL4NLX",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
export const db = getFirestore(app);
// Initialize Analytics (only in browser)
export const analytics =
  typeof window !== "undefined" ? getAnalytics(app) : null;

export default app;
