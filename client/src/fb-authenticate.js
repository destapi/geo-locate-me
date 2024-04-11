const { initializeApp } = require('firebase/app');
const { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } = require("firebase/auth");
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
const auth = getAuth(firebaseApp);

function watchAuthStatus() {
    onAuthStateChanged(auth, user => {
        // Check for user status
        console.log('user status changed', user)
    });
}

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

const signInForm = document.querySelector(".sign-in-container form");
signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, "/", email, "/", password);

    signInWithEmailAndPassword(auth, email, password)
        .then(creds => {
            console.log('user signed in', creds.user)
        })
        .catch(error => {
            console.log("sign in error", error)
        })
})

const signUpForm = document.querySelector(".sign-up-container form");
signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, "/", password);

    createUserWithEmailAndPassword(auth, email, password)
        .then(creds => {
            console.log('user credentials', creds.user)
        })
        .catch(error => {
            console.log("sign up error", error)
        })

})

const signOutBtn = document.querySelector(".sign-out-btn");
signOutBtn.addEventListener('click', async (e) => {
    signOut(auth)
        .then(() => {
            console.log('user signed out')
        })
        .catch(error => {
            console.log("sign out error", error)
        })
});

document.addEventListener("DOMContentLoaded", (event) => {
    watchAuthStatus()
});

module.exports = {
    firebaseApp,
    messaging,
    watchAuthStatus,
}