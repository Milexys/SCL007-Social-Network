//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
let modal = document.getElementById("mimodal");
let flex = document.getElementById("flex");
let openModal = document.getElementById("register");
let closeModal = document.getElementById("close");

openModal.addEventListener("click", () =>{
modal.style.display = "block";
});
closeModal.addEventListener("click", () =>{
modal.style.display = "none";
});
window.addEventListener("click", (e) =>{
if (e.target === flex){
modal.style.display = "none";
}
});

let nextButton = document.getElementById("next");
let pets =document.getElementById("pets");
let owner = document.getElementById("owner");
let registerButton = document.getElementById("registerButton");


nextButton.addEventListener("click", () =>{
pets.style.display = "block";
owner.style.display = "none";
nextButton.style.display = "none";
registerButton.style.display = "block";
})
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
import {checkAuthState, registerUser} from '../auth/auth.js';

window.onload = () => {
  checkAuthState((user)=>{
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
   }); 
}
const register = () => {
 
  const email = document.getElementById("emailRegister").value; 
  const password = document.getElementById("passwordRegister").value; 
  registerUser(email, password);
  modal.style.display = "none";
   }
   document.getElementById("registerButton").addEventListener("click", register);

  

function login(){
  const email= document.getElementById("mailtext").value; 
  const contraseña= document.getElementById("passwordTextfield").value; 
  console.log ("hiciste click");
  firebase.auth().signInWithEmailAndPassword(email, contraseña)
  console.log(email);
  // .catch(function(error) {
  //   // Handle Errors here.
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  //   console.log (errorCode + " " + errorMessage);
    
  // };
}
// function reset(){
//   console.log("click")
// }


function mensaje(){
  const contenido = document.getElementById("contenido"); 
  contenido.innerHTML= "mensaje para ususrio"
}

function logout(){
  console.log ("hiciste click");
}

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