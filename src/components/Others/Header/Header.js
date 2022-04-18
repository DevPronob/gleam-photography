import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"
import auth from "../../../Auth/firebase.init"
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
const Header = () => {
    const [user] =useAuthState(auth);
    return (
        <div>
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid nav-container py-3">
    <a class="navbar-brand fs-1" href="/">Gleam Photography</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link className='nav-link text-white active fs-4' to="/">Home</Link>
        </li>
        
        <li class="nav-item">
        <Link className='nav-link text-white fs-4' to="/register">Register</Link>
        </li>
        <li class="nav-item">
            {
                user?<button onClick={()=>signOut(auth)}  className='btn fs-4 btn-primary'>SignOut</button>:<Link className='nav-link text-white fs-4' to="/login">Login</Link>
                
            }
        
        </li>
        
        <li class="nav-item">
        <Link className='nav-link text-white fs-4' to="/checkout">Checkout</Link>
        </li>
        <li class="nav-item">
        <Link className='nav-link text-white fs-4' to="/blog">Blog</Link>
        </li>
        <li class="nav-item">
        <Link className='nav-link text-white fs-4' to="/about">About</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;