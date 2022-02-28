// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDBLFZIunScDa62-V1oRFcp-Srf4LFXgeI",
    authDomain: "train-18b07.firebaseapp.com",
    projectId: "train-18b07",
    storageBucket: "train-18b07.appspot.com",
    messagingSenderId: "947604291659",
    appId: "1:947604291659:web:0d55cf56da4c08d6f24dce",
    measurementId: "G-SLR42VW4CX"
};
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();

export { db };
