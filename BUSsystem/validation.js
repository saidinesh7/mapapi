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
  

function validate(){
   
    var email=document.getElementById("email");
    var pass=document.getElementById("pass");

    const promise=auth.createUserWithEmailAndPassword(email.value,pass.value);
promise.catch(e => alert(e.message));
 


firebase.auth().onAuthStateChanged(user => {
    if(user){
      window.location = "login.html"; 
    }
  });
}

