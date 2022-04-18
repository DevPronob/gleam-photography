import React, { useRef ,useState } from 'react';
import {Link, useNavigate,useLocation} from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../../src/Auth/firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    const [loginError,setLoginErrror] =useState("")
    const [sendPasswordResetEmail, sending3, error3] = useSendPasswordResetEmail(
        auth
      );
    const handleSubmit =(event)=>{
        event.preventDefault()
        const email =emailRef.current.value;
        const password =passwordRef.current.value;
        // if(email||password === null){
        //     setLoginErrror("Please enter ypur email and password correctly")
        //     return
        // }
          if(error){
            setLoginErrror(error.message)
            return
        }
        signInWithEmailAndPassword(email, password)
    }
    if(user){
        navigate("/")
    }
    const handleReset =async()=>{
        const email =emailRef.current.value;
        if(email){
            await sendPasswordResetEmail(email);
       toast("Mail Sent");
        }else{
            toast("Please Enter Your Email ");
        }
        
    }

    return (
        <div>
            <div className="w-25 mx-auto mt-5 ">
                <h2>Please Login</h2>
        <form onSubmit={handleSubmit}>

          <div className="form-outline mb-4">
          <label className="form-label" for="form1Example13">Email address</label>
            <input ref={emailRef} type="email" id="form1Example13" className="form-control form-control-lg" required/>
            
          </div>


          <div className="form-outline mb-4">
          <label className="form-label" for="form1Example23">Password</label>
            <input ref={passwordRef} type="password" id="form1Example23" className="form-control form-control-lg" required />
            
          </div>

          <div className="d-flex justify-content-around align-items-center mb-4">


          <div className="form-check">
             <h5>New to here <Link className='text-decoration-none' to="/register">Register</Link></h5>
          </div>

          </div>

          <button type="submit" className="btn btn-primary btn-lg btn-block">Sign in</button>
            <p className='text-danger'>{loginError}</p>
          <div className="divider d-flex align-items-center my-4">
              <h5>Forget Password <button onClick={handleReset} className='border-none'>Reset Password</button> </h5>
            <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
          </div>

          <button onClick={()=>signInWithGoogle()} className="btn btn-primary btn-lg btn-block" 
            >
            <i className="fab fa-facebook-f me-2"></i>Continue with Google
          </button>

        </form>

      </div>
      <ToastContainer />
      
        </div>
    );
};

export default Login;

// style="background-color: #55acee"
// style="background-color: #3b5998"