import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyD-nGlkFLYubkuRiL7YN0wTRchhf_UZfvw",
    authDomain: "login-6df85.firebaseapp.com",
    projectId: "login-6df85",
    storageBucket: "login-6df85.appspot.com",
    messagingSenderId: "949407865870",
    appId: "1:949407865870:web:614da719ddcaf942ec305f"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;