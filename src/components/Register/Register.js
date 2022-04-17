import React, { useRef } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../src/Auth/firebase.init'
import { useSendEmailVerification } from 'react-firebase-hooks/auth';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      let navigate = useNavigate();
      const [sendEmailVerification, sending, verificationError] = useSendEmailVerification(
        auth
      );
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
        sendEmailVerification()
        
    }
    if(user){
        navigate("/")
    }
    
    return (
        <div>
             <div className=" d-flex justify-content-center mt-5 ">
            
        <form onSubmit={handleSubmit}>
        <h1>Please Register</h1>
          <div className="form-outline mb-4">
          <label className="form-label" for="form1Example13">Email address</label>
            <input ref={emailRef} type="email" id="form1Example13" className="form-control form-control-lg" />
            
          </div>


          <div className="form-outline mb-4">
          <label className="form-label" for="form1Example23">Password</label>
            <input ref={passwordRef} type="password" id="form1Example23" className="form-control form-control-lg" />
            
          </div>
          <div className="form-outline mb-4">
          <label className="form-label" for="form1Example23">Confirm Password</label>
            <input ref={confirmPassRef} type="password" id="form1Example23" className="form-control form-control-lg" />
            
          </div>

          <div className="d-flex justify-content-around align-items-center mb-4">


            <div className="form-check">
             <h5>Already Register <Link classNameName='text-decoration-none' to="/login">Login</Link></h5>
          </div>
          </div>

          <button type="submit" className="btn btn-primary btn-lg btn-block"> Sign Up</button>



         

        </form>
      </div>
        </div>
    );
};

export default Register;