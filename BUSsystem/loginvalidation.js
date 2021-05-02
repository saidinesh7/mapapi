

var firebaseConfig = {
  apiKey: "AIzaSyCTSPw0cadQk_cDtot7G2iYXnO73pz0ZhE",
  authDomain: "mainmapproject-6a7d1.firebaseapp.com",
  projectId: "mainmapproject-6a7d1",
  storageBucket: "mainmapproject-6a7d1.appspot.com",
  messagingSenderId: "812542707311",
  appId: "1:812542707311:web:92c8bace1011bb1f99af9a",
  measurementId: "G-3Z7BC5QEBN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth =firebase.auth();


function validation(){
    var username = document.getElementById("uname");
    var Password = document.getElementById("pass");

const promise=auth.signInWithEmailAndPassword(username.value,Password.value)
.then((success) => {
  swal({
      type: 'successfull',
      title: 'Succesfully signed in', 
  }).then((value) => {
    
          window.location.replace("Services.html");
      }
  );
}).catch((error) => {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  swal({
      type: 'error',
      title: 'Error',
      text: "Error",
  })
});



}