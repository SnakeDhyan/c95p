var firebaseConfig = {
    apiKey: "AIzaSyCH3oCg-0ascRTNbsL3GLq4-tH-j9QWPR8",
    authDomain: "chat-app-defdb.firebaseapp.com",
    projectId: "chat-app-defdb",
    storageBucket: "chat-app-defdb.appspot.com",
    messagingSenderId: "1007536002542",
    appId: "1:1007536002542:web:6209ded6f937bccc03aaff"
  };
  var app = initializeApp(firebaseConfig);

  function addRoom()
  {
        room_name=document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose : "adding room name"
        });
        localStorage.setItem("room_name",room_name);
        window.location="chat_page.html";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("Room Name - "+Room_names);
    row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML+=row;
   });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="chat_page.html";
}