
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
const inputTextField = document.querySelector("#pokerStatus");
const saveButton = document.querySelector("#saveStatusButton");
const loadButton = document.querySelector("#loadStatusButton");

saveButton.addEventListener("click", function(){
  const newStatus = inputTextField.value;
  docRef.set({
    Country : newStatus
  });
});
loadButton.addEventListener("click", function () {
  docRef.get().then(function (doc) {
    if(doc && doc.exists){
      const myData = doc.data();
      outputHeader.innerText = "Status = " + myData.Country;
    }
  }).catch(function (error) {
    console.log("error");
  });

});
});
