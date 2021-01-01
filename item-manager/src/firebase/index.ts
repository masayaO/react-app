import firebase from 'firebase/app';
import 'firebase/firestore';

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Firebaseを紐付け、初期化
export const firebaseApp = firebase.initializeApp(firebaseConfig);

// Firestoreのインスタンス作成
export const db = firebaseApp.firestore();

export default firebase;
