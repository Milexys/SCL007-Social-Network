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
  });

  //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  import {checkAuthState, registerUser, loginUser, facebookLogin, googleLogin, logOut} from './auth/auth.js';
  import {savePosting, readPost, savePet} from './data/data.js'
  window.onload = () => {
  checkAuthState((user)=>{
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log ("existe usuario activo");
        if(user.emailVerified){
          document.getElementById("root").style.display = "none";
          document.getElementById("logIn").style.display = "block";
          document.getElementById("welcomeText").style.display = "none";

          readPostFromDatabase();
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
   document.getElementById("registerButton").addEventListener("click", () =>{
     //Validacion para el formulario de registro
      let petName = document.getElementById("petName").value;
      let petType = document.getElementById("petType").value;
      let petSex = document.getElementById("petSex").value;
      let petAge = document.getElementById("petAge").value;
      let petInformation = document.getElementById("petInformation").value;
      let completeForm2 = document.getElementById("completeAlert2");

      if (petName === "" || petType === "" || petSex === "" || petAge === "" || petInformation === ""){
        completeForm2.style.display= "block";
      }
      else {
      const email = document.getElementById("emailRegister").value; 
      const password = document.getElementById("passwordRegister").value; 
      registerUser(email, password);
      petData();
     }
   });
//:::::::::::::::::::::::::::::::::::::::::::LOGIN:::::::::::::::::::::::::::::::::::::::::::::

  const loginUserWithEmailAndPassword = () => {
    const emailFromUser = emailSignIn.value;
    const passwordFromUser = passwordSignIn.value;
    loginUser(emailFromUser, passwordFromUser);
  };
  //boton del login
  document.getElementById("signIn").addEventListener("click", loginUserWithEmailAndPassword);

  //boton de facebook
  document.getElementById("facebook").addEventListener("click", facebookLogin);
  
  //boton de google
  document.getElementById("google").addEventListener("click", googleLogin);

  //boton de cerrar sesión
  document.getElementById("signOut").addEventListener("click", logOut);
  //::::::::::::::::::::::::::::::::::::REGISTER DATA::::::::::::::::::::::::::::::::::::::::::::
  const petData = () => {
    let petOwner = document.getElementById("petOwner").value;
    let petName = document.getElementById("petName").value;
    let petType = document.getElementById("petType").value;
    let petSex = document.getElementById("petSex").value;
    let petAge = document.getElementById("petAge").value;
    let petInformation = document.getElementById("petInformation").value;
    savePet(petOwner, petName, petType, petSex, petAge, petInformation);
 }
  //::::::::::::::::::::::::::::::::::::::POST::::::::::::::::::::::::::::::::::::::::::::::::
  const posting = () => {
    let postEmpty = document.getElementById("postAlert");
    let postText = document.getElementById("postText").value;
    if(postText === ""){
      postEmpty.style.display= "block";
    }
    else {
      postEmpty.style.display= "none";
      let postText = document.getElementById("postText").value;
      let userName = document.getElementById("postName").value;
      savePosting(postText, userName);
    }
  } 
  document.getElementById("postBtn").addEventListener("click", posting);
  //ID UNICA
  /*let createID = (function(){
    let map = {}
    return function(prefix) {
      prefix = prefix || 'autoSocial';
      map[prefix] = map[prefix] || 0;
      let id = prefix + '-' + map[prefix]++;
      if (document.getElementById(id)){
        return createID(prefix);
      }
      return id;
    }
  })()*/
  //CREA EL POST

  let inExec = false;
  const readPostFromDatabase = () => {
    if(inExec){
      return;
    }
    inExec = true;
   // document.getElementById("postear").innerHTML = "";
    readPost((post) => {
    
    let newDiv = document.createElement("div");
    newDiv.id = post.key;
    newDiv.innerHTML = 
    `
    <div class="container"> 
      <div class="postBox">
          <div class="postBox-header">
            <div class="paw">
              <i class="material-icons">pets</i>
            </div>
            <div class="titlePost">
                <h3>${post.val().user}</h3>
            </div>
            </div>                
          <div id="postBox" class="postBox-body">
              <p><b>Mensaje:</b></p>
              <div class="message">
                  <p class="textmessage">${post.val().posting}</p>
              </div> 
              <div id="editBox" data-id="${post.key}" class="editingBox">
                <textarea id="editedText" class="editingTextarea"></textarea>
                <div class="editButtons">
                  <button id="cancelEdit">Cancelar</button>
                  <button id="updateButton">Actualizar</button>
                </div>
              </div>              
          </div>
          <div class="iconos">
          <div class="delete">
                <a id="postDelete${post.key}" class="deleteIcon">
                <i class="material-icons">delete</i></a>
              </div>
          </div>
      </div>
    <hr class="barPost">
  </div>
    `
    postear.insertBefore(newDiv, postear.childNodes[0]);

    let deletePost = document.getElementsByClassName("deleteIcon");
    for (let i = 0; i< deletePost.length; i++){
      deletePost[i].addEventListener("click", deletingPost);
    }
    let editPost = document.getElementsByClassName("editIcon");
    for (let i = 0; i< editPost.length; i++){
      editPost[i].addEventListener("click", editingPost);
    }
    });
  }
  //:::::::::::::::::::::::::::::::::::::::::::::DELETE POST::::::::::::::::::::::::::::::::::::::::::::::.
const deletingPost = (post) =>{
let confirmation = confirm("¿Desea eliminar esta publicación?");
if (confirmation){
  const IDpost = post.currentTarget.getAttribute("id").slice(10);
  firebase.database().ref("post/"+IDpost).remove();
  post.key.
  readPostFromDatabase();
  }else{
    readPostFromDatabase();
  }
}
//:::::::::::::::::::::::::::::::::::::::::::EDIT POST::::::::::::::::::::::::::::::::::::::::::::

const editingPost = (post) => {
  const prueba = document.getElementById("editBox");
  const IDpost = prueba.dataset.id;
  console.log(IDpost);
  let editingBox = document.getElementById("editBox");
  let cancelEdit = document.getElementById("cancelEdit");
  editingBox.style.display = "block";
  cancelEdit.addEventListener("click", () => {
    editingBox.style.display = "none";
  })
}





