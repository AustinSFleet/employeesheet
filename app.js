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

var name = "";
var role = "";
var startDate = "";
var monthlyRate = 0;



$("button").on("click", function(event){
    event.preventDefault();

    var name = $("#name").val().trim();
    var role= $("#role").val().trim();
    var startDate = $("#start-date").val().trim();
    var monthlyRate = $("#monthly-rate").val().trim();

    $("#newEmployee").append( $("<tr>").attr(class="firstrow"));
    $()
        
    

    console.log(name);
    console.log(role);
    console.log(startDate);
    console.log(monthlyRate);



});

