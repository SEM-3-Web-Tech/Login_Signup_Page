const firebaseConfig = {
    apiKey: "AIzaSyBJlO4cKG1XPfK_ZVzxpBXBjJDWsvOMar8",
    authDomain: "login-signup-7e310.firebaseapp.com",
    databaseURL: "https://login-signup-7e310-default-rtdb.firebaseio.com",
    projectId: "login-signup-7e310",
    storageBucket: "login-signup-7e310.appspot.com",
    messagingSenderId: "796392603665",
    appId: "1:796392603665:web:ab1c7a7b1300749664b1b0",
    measurementId: "G-4HWG6YYPDJ"
  };

firebase.initializeApp(firebaseConfig);
var loginformDB= firebase.database().ref('login-signup')
document.getElementById('signup').addEventListener('submit',submitForm);
function submitForm(e){
e.preventDefault();
var user_s=getElementValue('user_s');
var email_s=getElementValue('email_s');
var epass_s=getElementValue('epass_s');


saveMessages(user_s,email_s,epass_s);

}


const saveMessages=(user_s,email_s,epass_s)=>{
  firebase.auth().createUserWithEmailAndPassword(email_s, epass_s)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    var newloginform=loginformDB.push();
    newloginform.set({
    user_s: user_s,
    email_s: email_s,
    epass_s: epass_s,
    });
    alert('Succesfully Registered')
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
  document.getElementById('signup').reset();
};

const getElementValue=(id)=>{
return document.getElementById(id).value;
};
 