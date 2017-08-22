var config = {
    apiKey: "AIzaSyABhn0VMFvU6j_eC_pMv-zjLWa0LkwaQV0",
    authDomain: "firstproject-168e4.firebaseapp.com",
    databaseURL: "https://firstproject-168e4.firebaseio.com",
    projectId: "firstproject-168e4",
    storageBucket: "firstproject-168e4.appspot.com",
    messagingSenderId: "16449087038"
  };
  firebase.initializeApp(config);

var database=firebase.database();

var name = $("#name").html
var role= $("#role")