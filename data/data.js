export const savePet = (petOwner, petName, petType, petSex, petAge) => {
  const newPetKey = firebase.database().ref('pets/').child('profile').push().key;
  firebase.database().ref(`pets/${newPetKey}`).set({
    Owner: petOwner,
    Name: petName,
    Type: petType,
    Sex: petSex,
    Age: petAge
  });
}