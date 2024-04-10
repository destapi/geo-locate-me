const { initializeApp } = require('firebase/app');
const { getFirestore, collection, query, where, orderBy, doc,
    getDocs, getDoc, addDoc, updateDoc, deleteDoc, onSnapshot, GeoPoint, serverTimestamp,
} = require('firebase/firestore');

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);

async function watchDeviceLocation(deviceId) {
    const collRef = collection(firestore, 'traccar-events')
    const q = query(collRef, where("deviceId", "==", deviceId));

    onSnapshot(q, (snapshot) => {
        snapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
}

async function fetchRowRecord(rowId) {
    const docRef = await doc(firestore, 'traccar-events', rowId);
    let docData = await (await getDoc(docRef)).data()
    console.log(docData);
    return docData
}

async function fetchDeviceLocations(deviceId) {
    const collRef = collection(firestore, 'traccar-events')
    const q = query(collRef, where("deviceId", "==", deviceId), orderBy("sendTime", "desc"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
}

async function addDeviceLocation({ deviceId, location: { lng, lat } }) {
    const collRef = collection(firestore, 'traccar-events')
    await addDoc(collRef, {
        deviceId,
        location: new GeoPoint(lat, lng),
        sendTime: serverTimestamp()
    })
}

async function updateDeviceLocation(rowId, { lng, lat }) {
    const docRef = await doc(firestore, 'traccar-events', rowId);
    await updateDoc(docRef, {
        location: new GeoPoint(lat, lng),
        sendTime: serverTimestamp(),
    })
}

async function deleteDeviceLocation(rowId) {
    const docRef = await doc(firestore, 'traccar-events', rowId);
    await deleteDoc(docRef)
}

module.exports = {
    firebaseApp,
    firestore,
    addDeviceLocation,
    fetchRowRecord,
    fetchDeviceLocations,
    updateDeviceLocation,
    deleteDeviceLocation,
    watchDeviceLocation
}