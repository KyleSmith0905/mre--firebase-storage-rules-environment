import { initializeApp } from "firebase/app";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { connectStorageEmulator, getStorage } from "firebase/storage";

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyARgyJRWbhkXynpwF-W22gLhvREj2ZI7pY",
  authDomain: "mre--inconsistent-rules.firebaseapp.com",
  projectId: "mre--inconsistent-rules",
  storageBucket: "mre--inconsistent-rules.appspot.com",
  messagingSenderId: "938377300138",
  appId: "1:938377300138:web:d8c319953a9a975410e8d3"
})


export const storage = getStorage()
export const firestore = getFirestore();
console.log(import.meta.env);
if (import.meta.env.VITE_APP_ENV === 'emulator') {
	console.log('connected to emulator')
	connectStorageEmulator(storage, '127.0.0.1', 9199)
	connectFirestoreEmulator(firestore, '127.0.0.1', 8080)
}