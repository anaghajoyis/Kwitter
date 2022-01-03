function login(){
 data=document.getElementById("login_input").value;
 localStorage.setItem("Username",data);
 window.location="kwitter_room.html";
}