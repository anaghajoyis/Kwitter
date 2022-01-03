const firebaseConfig = {
    apiKey: "AIzaSyC_VIj6ZT32oj1jPdAt6PGAWiu44dMCpSM",
    authDomain: "kwitter-new-6b9c3.firebaseapp.com",
    databaseURL: "https://kwitter-new-6b9c3-default-rtdb.firebaseio.com",
    projectId: "kwitter-new-6b9c3",
    storageBucket: "kwitter-new-6b9c3.appspot.com",
    messagingSenderId: "997403350128",
    appId: "1:997403350128:web:834a520584c16b430650b5"
  };
  
firebase.initializeApp(firebaseConfig);
var username=localStorage.getItem("Username");
document.getElementById("username").innerHTML="Welcome "+username;
function addingroom(){
    var roomName= document.getElementById("addroom").value;
    firebase.database().ref("/").child(roomName).update({
        purpose:"adding room"
    });
    localStorage.setItem("roomname",roomName);
    window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   console.log("Data from database: "+ Room_names);
   row="<div class='room_name' id="+ Room_names +"onclick='redirectroomname(this.id)'>"+Room_names+"</div> <hr>";
   document.getElementById("output").innerHTML+=row;
   });});}
getData();
function redirectroomname(name){
    console.log("Redirect function "+name);
    localStorage.setItem("roomname",name);
    window.location="kwitter_page.html";
}
function logout(){
    localStorage.removeItem("Username");
    localStorage.removeItem("roomname");
    window.location="index.html";
}