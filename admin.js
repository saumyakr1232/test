

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

firebase.auth().onAuthStateChanged(function(user) {
  if ( user) {
  //   User is signed in.
    
  } 
  
    
  
  else {
    console.log('user is logged out');
    window.location = 'login.html';
  }
});



function logout(){
  firebase.auth().signOut();
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
    //   User is signed in.
    } 
    
      
    
    else {
      
      window.location = 'login.html';
    }
  });
  
  // document.getElementById("userId").value="";
  // document.getElementById("password").value="";
}


const mainDiv = document.querySelector(".mainDiv");

function renderTable(doc){
let ul = document.createElement('ul');
let email = document.createElement('li');
let phone = document.createElement('li');
let qualification = document.createElement('li');
let course = document.createElement('li');
let stream = document.createElement('li');
let date = document.createElement('li');
let cross = document.createElement('button');


if(doc.val().stream === ""){
  // ul.innerText= doc.val().fullName ;
  ul.innerHTML="<h3>"+doc.val().fullName.toUpperCase() +"</h3>";
  ul.setAttribute('data-id', doc.key);
  email.textContent = "Email: " + doc.val().email;
  phone.textContent = "Phone: "+ doc.val().phone;
  qualification.textContent = "Qualification: "+ doc.val().qualification;
  course.textContent = "Course: "+ doc.val().course;
}
else{
  ul.innerHTML="<h3>"+doc.val().fullName.toUpperCase() +"</h3>";
  ul.setAttribute('data-id', doc.key);
  email.textContent = "Email: "+ doc.val().email;
  phone.textContent = "Phone: "+ doc.val().phone;
  qualification.textContent = "Qualification: "+ doc.val().qualification;
  course.textContent = "Course: "+ doc.val().course;
  stream.textContent = "Stream: "+ doc.val().stream;
  
  ul.appendChild(stream);
}


date.textContent = "Date: "+ doc.val().date;

cross.innerText= "Remove" ;

 cross.id= doc.key;

ul.appendChild(email);
ul.appendChild(phone);
ul.appendChild(qualification);
ul.appendChild(course);
// ul.appendChild(stream);
ul.appendChild(date);
ul.appendChild(cross);

mainDiv.appendChild(ul);

var cross_id = cross.id;
 var btnElement = document.getElementById(cross.id);
 

btnElement.addEventListener("click", function(event){
  event.stopPropagation();
  ref.child(cross_id).remove();
  btnElement.style.visibility = "hidden";
});  
}




ref.on("child_added", snap => {
renderTable(snap);
});

