

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAn0idywCGZyCEDf3_VVOrM5-LigXkP4Qc",
    authDomain: "pokeronlinedom.firebaseapp.com",
    databaseURL: "https://pokeronlinedom.firebaseio.com",
    projectId: "pokeronlinedom",
    storageBucket: "pokeronlinedom.appspot.com",
    messagingSenderId: "727511636242"
  };
  firebase.initializeApp(config);
var firestore = firebase.firestore();

const docRef = firebase.doc("filter/param");
const outputHeader = document.querySelector("#pokerStatusOutput");
const inputTextField = document.querySelector("#latestPokerStatus");
const saveButton = document.querySelector("#saveStatusButton");
const loadButton = document.querySelector("#loadStatusButton");

saveButton.addEventListener("click", function(){
  const newStatus = inputTextField.value;
  docRef.set({
    Status: newStatus
  }).then(function(){
    console.log("save");
  )}.catch(function(error) {
    console.log("error");
  });
  });
})
