import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from "firebase/messaging";
const localProps = require('./init-props');

const firebaseConfig = {
    apiKey: localProps("REACT_APP_FIREBASE_API_KEY"),
    authDomain: localProps("REACT_APP_FIREBASE_AUTH_DOMAIN"),
    projectId: localProps("REACT_APP_FIREBASE_PROJECT_ID"),
    storageBucket: localProps("REACT_APP_FIREBASE_STORAGE_BUCKET"),
    messagingSenderId: localProps("REACT_APP_FIREBASE_MESSAGING_SENDER_ID"),
    appId: localProps("REACT_APP_FIREBASE_APP_ID")
};

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export async function generateToken() {
    const perms = await Notification.requestPermission();
    console.log(perms)
    if (perms === 'granted') {
        const notification = new Notification("Ready to receive notifications", {
            body: "Additional text",
            tag: "overrite information"
        })

        notification.addEventListener("close", e => {
            console.log(e, "notification closed")
        })

        const token = await getToken(messaging, { vapidKey: localProps("REACT_APP_FIREBASE_VAPID_KEY") });
        console.log(token)
    }
}

export function onMessageEvent(callback){
    onMessage(messaging, payload => {
        callback(payload)
    })
}

export default {
    firebaseApp,
    messaging,
}