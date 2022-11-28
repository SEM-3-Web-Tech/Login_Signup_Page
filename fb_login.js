document.getElementById('login').addEventListener('submit',submitForm);
function submitForm(e){
  e.preventDefault();
var email_l=getElementValue('email_l');
var pass_l=getElementValue('pass_l');
firebase.auth().signInWithEmailAndPassword(email_l,pass_l)
.then((data) => 
{
  var emailx=data.email_s;
  var passx=data.epass_s;
  console.log(emailx,passx);
  alert('logged in')
  document.getElementById('login').reset();
})
.catch(function(error)
{
  var errorCode=error.code;
  var errorMessage=error.message;
  console.log(errorCode);
  console.log(errorMessage);
  alert('Invalid Password or Email')
  document.getElementById('login').reset();
})
}


