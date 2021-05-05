// First Name
// Last Name
// Email
// Phone Number

const firebase = require("firebase");
require('dotenv').config();
const uuid = require("uuid");

var firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

function writeUserData(firstName, lastName, email, phoneNumber) {
  firebase
    .database()
    .ref("users/" + uuid.v4())
    .set({
      firstName,
      lastName,
      email,
      phoneNumber,
    })
    .then((res) => {
      console.log(res, "result");
    })
    .catch((err) => {
      console.log(err, "error o");
    });
}

const readUserData = () => {
  database.ref("users").on("value", function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var childData = childSnapshot.val();
      console.log(childData);
    });
  });
};

module.exports = {
    writeUserData,
    readUserData
};
