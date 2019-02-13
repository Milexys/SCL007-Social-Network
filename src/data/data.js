export const savePet = (petOwner, petName, petType, petSex, petAge, petInformation) => {
  
  const newPetKey = firebase.database().ref('pets/').child('profile').push().key;
  
  firebase.database().ref(`pets/${newPetKey}`).set({
    owner: petOwner,
    name: petName,
    type: petType,
    sex: petSex,
    age: petAge,
    information: petInformation
  });
}

export const savePosting = (postID, postText, userName) => {
  const newPostKey = firebase.database().ref('post/').child('post').push().key;
  firebase.database().ref(`post/${newPostKey}`).set({
    uid: postID,
    user: userName,
    posting: postText,
  });
}
export const readPost = (onPostChange) => {
  var postRef = firebase.database().ref('post');
  postRef.on('child_added', (post)=> {
    onPostChange(post);
  });
};
export const deletePost = (postID) => {
  let postRef = firebase.database().ref(`post/`);
  postRef.child(postID).remove();
}