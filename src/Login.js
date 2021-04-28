import React from "react";

function Login(props){
    const {email,setEmail,password,setPassword,handleLogin,handleSignup,sign,setSign,emailError,passwordError} = props;
    return(
        <section className="login">
          <div className="loginContainer">
             <label>Username</label>
             <input 
                type="text" 
                outfocus 
                required 
                value={email} 
                onChange={(e)=> setEmail(e.target.value)}
                />
                <p className="errorMsg">{emailError}</p>
                <label>password</label>
                <input
                    type="password"
                    required
                    value = {password}
                    onChange = {(e)=>setPassword(e.target.value)}
                />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {sign?(
                        <>
                           <button onClick={handleLogin}>Sign in</button>
                           <p>
                                Don't have an account ? 
                                <span onClick={()=>setSign(!sign)}>Sign Up</span>
                            </p>
                        </>
                    ):(
                        <>
                           <button onClick={handleSignup}>Sign up</button>
                           <p>
                             Have an account ? 
                             <span onClick={()=>setSign(!sign)}>Sign in</span>
                           </p>
                        </>
                    )}
                </div>
          </div>

        </section>
    )
}

export default Login;