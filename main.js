
var firebaseConfig = {
    apiKey: "AIzaSyDlcHrGBP7NKhe-QPRzICNLfxyR63F3jUk",
    authDomain: "admissionadmin.firebaseapp.com",
    databaseURL: "https://admissionadmin.firebaseio.com",
    projectId: "admissionadmin",
    storageBucket: "admissionadmin.appspot.com",
    messagingSenderId: "898174066575",
    appId: "1:898174066575:web:94c1a68586da4e5c7675fa"
 };


  //----------------form validation---------------------

  var form = document.querySelector(".needs-validation");

  form.addEventListener("submit",function(event){
      if(form.checkValidity() === false){
          event.preventDefault();
          event.stopPropagation();
      }
        form.classList.add("was-validated");
        submitForm(event);
      
  });


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
                                                                      

    let database = firebase.database()

    let ref = database.ref("UserDetails")
 

   
    
//---------------------listen for form submit----------------------------------


function submitForm(e){
        // get values

        var fullName = getInputVal('fullName');
        var qualification = getInputVal('qualification');
        var course = getInputVal('course');
        var stream = getInputVal('stream');
        var email = getInputVal('email');
        var phone = getInputVal('phone');

        //--------------Date and Time----------

        var dt = new Date();
        dt.setHours( dt.getHours() + 5 , dt.getMinutes()+ 30 );
        var str = dt.toGMTString();
        var str = str.replace('GMT','');
        
        //-----------------------------------------

        var timestamp = str ;

        if(fullName===""){
            return false;
        }
        if (qualification===""){
            return false;
        }
        if(course===""){
            return false;
        }

        if(email===""){
            return false;
        }
        if(phone===""){
            return false;
        }
       else{
        saveMessage(fullName, qualification, course, stream, email, phone, timestamp);
         //show alert
         document.querySelector(".alert").style.display = "block";

        // hide alert after 3 seconds
         setTimeout(function(){
          document.querySelector(".alert").style.display = "none";
            },3000);
        

       }
        
      

}

function getInputVal(id){
    return document.getElementById(id).value;
}


// save the message to firebase

function saveMessage(fullName, qualification, course, stream, email, phone, timestamp ){

    var newRef = ref.push();
    newRef.set({
        fullName: fullName,
        qualification: qualification,
        course: course,
        stream: stream,
        email: email,
        phone: phone,
        date : timestamp

    });
    
}


