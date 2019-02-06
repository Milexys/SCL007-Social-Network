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
import {checkAuthState, registerUser, loginUser} from './auth/auth.js';

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

const loginUserWithEmailAndPassword = () => {
    const emailFromUser = emailSignIn.value;
    const passwordFromUser = passwordSignIn.value;
    loginUser(emailFromUser, passwordFromUser);
  };
  document.getElementById("signIn").addEventListener("click", loginUserWithEmailAndPassword);

function mensaje(){
  const contenido = document.getElementById("contenido"); 
  contenido.innerHTML= "mensaje para ususrio"
}

function logout(){
  console.log ("hiciste click");
}

