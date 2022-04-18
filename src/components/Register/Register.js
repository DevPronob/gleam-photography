import React, { useRef, useState } from 'react';
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
    const nameRef =useRef("")
    const [registerError,setRegisterError] =useState("")
    const handleSubmit =(event)=>{
        event.preventDefault()
        const email =emailRef.current.value;
        const password =passwordRef.current.value;
        const name =nameRef.current.value;
        if(error){
            setRegisterError(error.message)
            return;
        }
        createUserWithEmailAndPassword(email, password)
        
        sendEmailVerification()
        
    }
    if(user){
        console.log(user)
        navigate("/")
    }
    
    return (
        <div>
             <div className=" w-25 mx-auto mt-5 ">
            
        <form onSubmit={handleSubmit}>
        <h1>Please Register</h1>

        <div className="form-outline mb-4">
          <label className="form-label" for="form1Example23">Name</label>
            <input ref={nameRef} type="text" id="form1Example23" className="form-control form-control-lg" />
            
          </div>
          <div className="form-outline mb-4">
          <label className="form-label" for="form1Example13">Email address</label>
            <input ref={emailRef} type="email" id="form1Example13" className="form-control form-control-lg" />
            
          </div>


          <div className="form-outline mb-4">
          <label className="form-label" for="form1Example23">Password</label>
            <input ref={passwordRef} type="password" id="form1Example23" className="form-control form-control-lg" />
            
          </div>
          

          <div className="d-flex justify-content-around align-items-center mb-4">


            <div className="form-check">
             <h5>Already Register <Link className='text-decoration-none' to="/login">Login</Link></h5>
          </div>
          </div>

          <button  type="submit" className="btn btn-primary btn-lg btn-block"> Sign Up</button>
          <p className='text-danger fs-3'>{registerError}</p>


         

        </form>
      </div>
        </div>
    );
};

export default Register;