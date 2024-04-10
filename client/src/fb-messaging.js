const { initializeApp } = require('firebase/app');
const { getMessaging, getToken } = require("firebase/messaging");

const REACT_APP_WEB_PUSH_KEY_PAIR = "BI2quxxgwH0_wgGJt2GHt9phY_DhkldsJJHCq4TMzz60KiNTCMqux-7fuQqRGBRINTCmGKhqZ6rVusxF7oYJGPc"
const REACT_APP_FIREBASE_API_KEY = "AIzaSyBpYFNTFvknzY-5qJs2RfppQIq62vWz80A"
const REACT_APP_FIREBASE_AUTH_DOMAIN = "geo-locate-me-sns.firebaseapp.com"
const REACT_APP_FIREBASE_PROJECT_ID = "geo-locate-me-sns"
const REACT_APP_FIREBASE_STORAGE_BUCKET = "geo-locate-me-sns.appspot.com"
const REACT_APP_FIREBASE_MESSAGING_SENDER_ID = "1082270282780"
const REACT_APP_FIREBASE_APP_ID = "1:1082270282780:web:7d07179df3c5ed45025bd9"

const firebaseConfig = {
    apiKey: REACT_APP_FIREBASE_API_KEY,
    authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: REACT_APP_FIREBASE_APP_ID
};

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);
getToken(messaging, { vapidKey: REACT_APP_WEB_PUSH_KEY_PAIR });

module.exports = {
    firebaseApp,
    messaging,
}