function ingresaConGoogle(){
  console.log ("hiciste click"); 
} 
function registrar(){
  console.log ("hiciste click");
  const email= document.getElementById("mailtext").value; 
  const contraseña= document.getElementById("passwordTextfield").value; 
  firebase.auth().createUserWithEmailAndPassword(email, contraseña).catch(function(error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode + " " + errorMessage);
    // ...
   }); 
  
}
function login(){
  const email= document.getElementById("mailtext").value; 
  const contraseña= document.getElementById("passwordTextfield").value; 
  console.log ("hiciste click");
  firebase.auth().signInWithEmailAndPassword(email, contraseña).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log (errorCode + " " + errorMessage);
    
  });
}

function observador(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log ("existe usuario activo");
      const displayName = user.displayName; mensaje()
      const email = user.email;
      const emailVerified = user.emailVerified;
      const photoURL = user.photoURL;
      const isAnonymous = user.isAnonymous;
      const uid = user.uid;
      const providerData = user.providerData;
      console.log ("no existe usuario activo");
      console.log(email,+displayName,+" "+emailVerified,+photoURL,+isAnonymous,+uid,+providerData);
     
    } else {
      // User is signed out.
      // ...
    }
  });
 } 
  observador()

function mensaje(){
  const contenido = document.getElementById("contenido"); 
  contenido.innerHTML= "mensaje para ususrio"
}

function logout(){
  console.log ("hiciste click");
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