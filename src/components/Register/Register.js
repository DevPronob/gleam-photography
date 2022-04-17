import React, { useRef } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../src/Auth/firebase.init'

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      let navigate = useNavigate();

    const emailRef =useRef("")
    const passwordRef =useRef("")
    const confirmPassRef =useRef("")
    const handleSubmit =(event)=>{
        event.preventDefault()
        const email =emailRef.current.value;
        const password =passwordRef.current.value;
        const confirmPassword =confirmPassRef.current.value;
        console.log(email,password,confirmPassword)
        createUserWithEmailAndPassword(email, password)
        
    }
    if(user){
        navigate("/")
    }
    
    return (
        <div>
             <div class=" d-flex justify-content-center mt-5 ">
        <form onSubmit={handleSubmit}>

          <div class="form-outline mb-4">
          <label class="form-label" for="form1Example13">Email address</label>
            <input ref={emailRef} type="email" id="form1Example13" class="form-control form-control-lg" />
            
          </div>


          <div class="form-outline mb-4">
          <label class="form-label" for="form1Example23">Password</label>
            <input ref={passwordRef} type="password" id="form1Example23" class="form-control form-control-lg" />
            
          </div>
          <div class="form-outline mb-4">
          <label class="form-label" for="form1Example23">Confirm Password</label>
            <input ref={confirmPassRef} type="password" id="form1Example23" class="form-control form-control-lg" />
            
          </div>

          <div class="d-flex justify-content-around align-items-center mb-4">


            <div class="form-check">
             <h5>Already Register <Link className='text-decoration-none' to="/login">Login</Link></h5>
          </div>
          </div>

          <button type="submit" class="btn btn-primary btn-lg btn-block">Sign Up</button>

          <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
          </div>

          <a class="btn btn-primary btn-lg btn-block"  href="#!"
            role="button">
            <i class="fab fa-facebook-f me-2"></i>Continue with Facebook
          </a>
          <a class="btn btn-primary btn-lg btn-block"  href="#!"
            role="button">
            <i class="fab fa-twitter me-2"></i>Continue with Twitter</a>

        </form>
      </div>
        </div>
    );
};

export default Register;