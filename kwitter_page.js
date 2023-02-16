//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyAqg9mPyeZFA2qZ1YXpCF-OQlnzg026Dr4",
      authDomain: "kwitterdatabase-12564.firebaseapp.com",
      databaseURL: "https://kwitterdatabase-12564-default-rtdb.firebaseio.com",
      projectId: "kwitterdatabase-12564",
      storageBucket: "kwitterdatabase-12564.appspot.com",
      messagingSenderId: "147676631481",
      appId: "1:147676631481:web:6e3e08397ce5230ef06668"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send()
    {
msg=document.getElementById("msg").value;
firebase.database().ref("room_name").push({
      name : user_name,
      message:msg,
      like:0
});
document.getElementById("msg").value;
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
