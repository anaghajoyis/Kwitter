var firebaseConfig = {
      apiKey: "AIzaSyC_VIj6ZT32oj1jPdAt6PGAWiu44dMCpSM",
      authDomain: "kwitter-new-6b9c3.firebaseapp.com",
      databaseURL: "https://kwitter-new-6b9c3-default-rtdb.firebaseio.com",
      projectId: "kwitter-new-6b9c3",
      storageBucket: "kwitter-new-6b9c3.appspot.com",
      messagingSenderId: "997403350128",
      appId: "1:997403350128:web:834a520584c16b430650b5"
    };
    
  firebase.initializeApp(firebaseConfig);
  var roomname= localStorage.getItem("roomname");
  var username= localStorage.getItem("Username");
function send(){
      var usermsg=document.getElementById("type_message").value;
      firebase.database().ref(roomname).push({
            Username: username,
            message: usermsg,
            like: 0
      });
      document.getElementById("type_message").value=" ";
}
function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
         console.log(message_data);
         names=message_data['Username'];
         message=message_data['message'];
         likes=message_data['like'];
         name_with_tag="<h4>"+names+"<img class='user_tick' src='tick.png'></h4>";
         message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
         like_button="<button class='btn btn-warning' id="+firebase_message_id+"value="+likes+"onclick='updatelike(this.id)'";
         span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like:"+likes+"</span></button><hr>"
         row=name_with_tag+message_with_tag+like_button+span_with_tag;
         document.getElementById("messages").innerHTML+=row;
          } });  }); }
getData();
function updatelike(message_id){
      console.log("Clicked on like button - "+message_id);
      button_id=message_id;
      likes=document.getElementById("button_id").value;
      updated_likes=Number(likes)+1;
      console.log(updated_likes);
      firebase.database().ref(roomname).child(message_id).update({
            like:updated_likes
      });
}
function logout(){
      localStorage.removeItem("Username");
      localStorage.removeItem("roomname");
      window.location="index.html";
  }
