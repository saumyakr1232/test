
var firebaseConfig = {
    apiKey: "AIzaSyDlcHrGBP7NKhe-QPRzICNLfxyR63F3jUk",
    authDomain: "admissionadmin.firebaseapp.com",
    databaseURL: "https://admissionadmin.firebaseio.com",
    projectId: "admissionadmin",
    storageBucket: "admissionadmin.appspot.com",
    messagingSenderId: "898174066575",
    appId: "1:898174066575:web:94c1a68586da4e5c7675fa",
    measurementId: "G-H4FGD1LMGY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
let database = firebase.database()

let ref = database.ref("UserDetails")


  firebase.analytics();






function login(){
    var userId = document.getElementById("userId").value;
    var password = document.getElementById("password").value;

    if(userId !== "" && password != ""){

    firebase.auth().signInWithEmailAndPassword(userId, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        window.alert("Error:" + errorMessage);

        
      });
      firebase.auth().onAuthStateChanged(function(user) {
        if ( user) {
        //   User is signed in.
        window.location = 'admin.html';
        } 
        
          
        
        else {
          console.log('user is logged out');
        }
      });
    }
    else
    {
      if(!document.getElementById("userId").checkValidity() || !document.getElementById("password").checkValidity()){
          alert("Empty fields are not allowed.");
      }else if(document.getElementById("password").value.length()< 5){
        alert("Invalid Password")
      }
     

    }
    

}

function backBtn(){
  location.href = "index.html";
}