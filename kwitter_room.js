
var firebaseConfig = {
      apiKey: "AIzaSyDbtIuYMRom7ozaDF0hUSiiYbIgwJQWEys",
      authDomain: "chat-app-83d77.firebaseapp.com",
      databaseURL: "https://chat-app-83d77-default-rtdb.firebaseio.com",
      projectId: "chat-app-83d77",
      storageBucket: "chat-app-83d77.appspot.com",
      messagingSenderId: "285625169168",
      appId: "1:285625169168:web:b833994a68e54d0b586195",
      measurementId: "G-NL3KS98VGG"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name;

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log(Room_names);
row="<div class='room_name' id='"+Room_names+"' onclick='redirectToRoomname(this.id)' >#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;  
      //End code
      });});}
getData();

function addroom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name",
            room_name:room_name});
            localStorage.setItem("room_name",room_name);
            window.location="kwitter_page.html";

}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"
} 
function redirectToRoomname(name) {
      localStorage.setItem("room_name",name);
            window.location="kwitter_page.html";
}
