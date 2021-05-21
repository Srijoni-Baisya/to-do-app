function song(){
    window.location="song.html";
}
function book(){
    window.location="book.html";
}

var firebaseConfig = {
    apiKey: "AIzaSyCgd-CMA2GPsFQwQO2d2ulFY1fBH9D64b0",
    authDomain: "to-do-app-b53ae.firebaseapp.com",
    databaseURL: "https://to-do-app-b53ae-default-rtdb.firebaseio.com",
    projectId: "to-do-app-b53ae",
    storageBucket: "to-do-app-b53ae.appspot.com",
    messagingSenderId: "242411416247",
    appId: "1:242411416247:web:fcf5baf2974c3a421ebb32"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



day = "entire_week";

function send(){
    task = document.getElementById("msg").value;
    firebase.database().ref(day).push({
        task : task
    });
    document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+day).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(childData);

tasks = message_data['task'];

name_of_task = '<h4>'+tasks+'</h4><br>';
row = name_of_task;
document.getElementById("output").innerHTML += row;
//End code
} });  }); }
getData();