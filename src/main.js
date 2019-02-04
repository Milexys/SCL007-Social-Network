function registrar(){
  // console.log ("hiciste click");
  const email= document.getElementById("mailtext").value; 
  const contraseña= document.getElementById("passwordTextfield").value; 
  firebase.auth().createUserWithEmailAndPassword(email, contraseña).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    
  });
}
function login(){
  //console.log ("hiciste click");
}
function logout(){
  //console.log ("hiciste click");
}
// import {checkAuthState}from './auth/auth.js';import {registerUser} from './auth/auth.js';

// window.onload = () => {
//   checkAuthState((user)=>{
//     if(user){
//       loginOrRegister.style.display = "none";
//       app.style.display = "block";
//     }else{
//       loginOrRegister.style.display = "block";
//       app.style.display = "none"; 
//     }})
//   checkAuthState((user)=>{
//     if(user){
//       logout.style.display = "none";
//       app.style.display = "block";
//     }else{
//       logout.style.display = "block";
//       app.style.display = "none";
//       }    
//   })



// const registerWithEmailAndPassword = () => {
//   const emailFromUser = emailTextfield.value;
//   const passwordFromUser = passwordTextfield.value;
//   registerUser(emailFromUser, passwordFromUser);
// };

// registerButton.addEventListener('click', registerWithEmailAndPassword);
// };