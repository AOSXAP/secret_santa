const firebase = require("firebase");
require("firebase/database");

var initFirebase = () => {
    var firebaseConfig = {
      apiKey: "AIzaSyD00zhm8WPg0d-eW-3O-Ut5amxU_nkgq00",
      authDomain: "secret-santa-6951c.firebaseapp.com",
      databaseURL: "https://secret-santa-6951c-default-rtdb.firebaseio.com",
      projectId: "secret-santa-6951c",
      storageBucket: "secret-santa-6951c.appspot.com",
      messagingSenderId: "494994205749",
      appId: "1:494994205749:web:40f5d4e79a69721dc6957c",
      measurementId: "G-346DF42FP5",
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
}



module.exports = initFirebase;