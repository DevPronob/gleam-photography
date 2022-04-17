import React, { useRef } from 'react';
import {Link, useNavigate,useLocation} from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../src/Auth/firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      
    let navigate = useNavigate();
    const emailRef =useRef("")
    const passwordRef =useRef("")
    const location =useLocation();
    let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
    
    const handleSubmit =(event)=>{
        event.preventDefault()
        const email =emailRef.current.value;
        const password =passwordRef.current.value;
        console.log(email,password)
        signInWithEmailAndPassword(email, password)
    }
    if(user){
        navigate("/")
    }

    return (
        <div>
            <div class="w-25 mx-auto mt-5 ">
                <h2>Please Login</h2>
        <form onSubmit={handleSubmit}>

          <div class="form-outline mb-4">
          <label class="form-label" for="form1Example13">Email address</label>
            <input ref={emailRef} type="email" id="form1Example13" class="form-control form-control-lg" required/>
            
          </div>


          <div class="form-outline mb-4">
          <label class="form-label" for="form1Example23">Password</label>
            <input ref={passwordRef} type="password" id="form1Example23" class="form-control form-control-lg" required />
            
          </div>

          <div class="d-flex justify-content-around align-items-center mb-4">


          <div class="form-check">
             <h5>New to here <Link className='text-decoration-none' to="/register">Register</Link></h5>
          </div>

          </div>

          <button type="submit" class="btn btn-primary btn-lg btn-block">Sign in</button>

          <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
          </div>

          <button onClick={()=>signInWithGoogle()} class="btn btn-primary btn-lg btn-block" 
            >
            <i class="fab fa-facebook-f me-2"></i>Continue with Google
          </button>

        </form>

      </div>
        </div>
    );
};

export default Login;

// style="background-color: #55acee"
// style="background-color: #3b5998"