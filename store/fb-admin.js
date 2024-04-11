const admin = require("firebase-admin");
const serviceAccount = require("../geo-locate-me-sns-firebase-adminsdk-gbzgy-dedfb1ee51.json");

admin.initializeApp({

    credential: admin.credential.cert(serviceAccount)

});

module.exports = {
    admin
};