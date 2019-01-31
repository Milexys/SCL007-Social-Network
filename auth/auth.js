export const checkAuthState = (callback) => {
  firebase.auth().onAuthStatechanged((user)=>{
    if (user){
    console.log("hay usuario>"+JSON.stringify(user));
    callback(user)
    }else{
      console.log("no esta logueado")
      callback(null)
    }
  })    
};

export const registerUser = (email, password) => {
  firebase.auth().createUserWhithEmailAndPassword(email,password)
  .then((user)=>{
    console.log("ususrio registrado>" + JSON.stringify(user));
    })
    .cath((error)=>{
      console.error("Error>"+error.message);
  });
}