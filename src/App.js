import React,{useState,useEffect} from 'react';
import './App.css';
import fire from './fire';
import Login from './Login';
import Note from './Note';
function App() {
  const [user,setUser] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [emailError,setEmailError] = useState("");
  const [passwordError,setPasswordError] = useState("");
  const [sign,setSign] = useState(false);
  function clearInputs(){
    setEmail("");
    setPassword("");
  }

  function clearError(){
       setEmailError("");
       setPassword("");
  }

  function handleLogin()
  {
    clearError();
      fire
       .auth()
       .signInWithEmailAndPassword(email,password)
       .catch(err =>{
         switch(err.code){
           case "auth/invalid-email":
           case "auth/user-disabled":
           case "auth/user-not-found":
              setEmailError(err.message);
              break;
            case "auth/wrong-password":
             setPasswordError(err.message);
             break; 
         }
       });
  };
  
  function handleSignup(){
    clearError();
    fire
       .auth()
       .createUserWithEmailAndPassword(email,password)
       .catch(err =>{
         switch(err.code){
           case "auth/email-already-in-use":
           case "auth/invalid-email":
              setEmailError(err.message);
              break;
            case "auth/weak-password":
             setPasswordError(err.message);
             break; 
         }
       });
  }

  function handleLogout(){
    fire.auth().signOut();
  }

  function authListener(){
    fire.auth().onAuthStateChanged(user =>{
      if(user){
        clearInputs();
        setUser(user);
      }else{
        setUser("");
      }
    })
  }

  useEffect(()=>{
     authListener();
  },[]);

  return (
    <div className="App">
    { user ?(<Note 
      username = {user.email}
      handleLogout={handleLogout}
    />):(
      <Login
      email = {email}
      setEmail = {setEmail}
      password = {password}
      setPassword = {setPassword}
      handleLogin = {handleLogin}
      handleSignup = {handleSignup}
      sign = {sign}
      setSign = {setSign}
      emailError = {emailError}
      passwordError = {passwordError}
    />
    )

    }
    </div>
  );
}
export default App;
