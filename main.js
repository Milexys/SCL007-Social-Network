document.addEventListener("DOMContentLoaded", event => {
  const config = {
    apiKey: "AIzaSyBoEkrJVmd5cNJQAd-drkN8_L5mRUIa-74",
    authDomain: "pet-social-network-e35d0.firebaseapp.com",
    databaseURL: "https://pet-social-network-e35d0.firebaseio.com",
    projectId: "pet-social-network-e35d0",
    storageBucket: "pet-social-network-e35d0.appspot.com",
    messagingSenderId: "678447862491"
};
firebase.initializeApp(config);

})
import {checkAuthState, registerUser, loginUser, facebookLogin, googleLogin, logOut} from './auth/auth.js';

window.onload = () => {
  checkAuthState((user)=>{
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log ("existe usuario activo");
        if(user.emailVerified){
          document.getElementById("root").style.display = "none";
          document.getElementById("logIn").style.display = "block";
        }
      modal.style.display = "none";    
      } else {
        console.log ("no existe usuario activo");  
        document.getElementById("root").style.display = "block";
        document.getElementById("logIn").style.display = "none";
      }
    });
   }); 
}
//:::::::::::::::::::::::::::::::::::REGISTER:::::::::::::::::::::::::::::::::::::::::::::::::::
const register = () => {
 
  const email = document.getElementById("emailRegister").value; 
  const password = document.getElementById("passwordRegister").value; 
  registerUser(email, password);
   }
   document.getElementById("registerButton").addEventListener("click", register);
//:::::::::::::::::::::::::::::::::::::::::::LOGIN:::::::::::::::::::::::::::::::::::::::::::::

const loginUserWithEmailAndPassword = () => {
    const emailFromUser = emailSignIn.value;
    const passwordFromUser = passwordSignIn.value;
    loginUser(emailFromUser, passwordFromUser);
  };
  document.getElementById("signIn").addEventListener("click", loginUserWithEmailAndPassword);

  document.getElementById("facebook").addEventListener("click", facebookLogin);

  document.getElementById("google").addEventListener("click", googleLogin);

  document.getElementById("signOut").addEventListener("click", logOut);


