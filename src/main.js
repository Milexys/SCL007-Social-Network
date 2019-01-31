import {checkAuthState, registerUser} from '../auth/auth.js';

window.onload = () =>{
  checkAuthState((user)=>{
    if(user){
      loginOrRegister.style.display = "none";
      app.style.display = "block";

    }else{
      loginOrRegister.style.display = "block";
      app.style.display = "none";

    }
  });
};
const registerWithEmailAnPasword =()=>{
  const emailformUser = emailTextfiel.value;
  const passwordformUser = passwordTextfiel.value;
  registerUser(emailformUser,passwordformUser);
};
registerButton.addEventListener('click', registerWithEmailAnPasword);



