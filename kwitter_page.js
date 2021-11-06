//YOUR FIREBASE LINKS
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
    room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

//Start code
console.log("firebase message id="+firebase_message_id);
console.log("firebase message data="+message_data);
name =  message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_tag='<h4>'+ name + '<img class="user_tick" src="tick.png"> </h4>';
message_tag='<h4 class="message_h4">' + message + '</h4>';
like_button= '<button class="btn btn-danger" id="'+firebase_message_id+'" value="'+like+'" onclick="update_likes(this.id)">';
span_tag='<span class="glyphicon glyphicon-thumbsup">likes:'+like+'</span> </button> </hr>';
row=name_tag+message_tag+like_button+span_tag;
document.getElementById("output").innerHTML+=row;
//End code

      } });  }); }

getData();
function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}
function update_likes(message_id)
{
      console.log("clicked on message button -" +message_id);
      button_id=message_id;
      likes= document.getElementById(button_id).value;
      update_like= Number(likes) +1;
      firebase.database().ref(room_name).child(message_id).update({
            like:update_like
      });
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
} 