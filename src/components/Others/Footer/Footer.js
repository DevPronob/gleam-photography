import React from 'react';
import "./Footer.css"
const Footer = () => {
    return (
        <div className='mt-5'>
           <footer class="bg-dark text-center text-white">
  <div class="container p-4 pb-0">
    <section class="pt-5">
      <form action="">
        <div class="row d-flex justify-content-center">
          <div class="col-auto">
            <p class="pt-2">
              <strong className='fs-4'>Sign up for our newsletter</strong>
            </p>
          </div>

          <div class="col-md-5 col-12">
            <div class="form-outline form-white mb-4">
              <input type="email" id="form5Example29" class="form-control" />
            </div>
          </div>

          <div class="col-auto">
            <button type="submit" class="btn btn-outline-light mb-4">
              Subscribe
            </button>
          </div>
        </div>
      </form>
    </section>

  </div>



  <div class="text-center fs-4 p-3 footer-bg">
    © 2020 Copyright 
    <a class="text-white ps-2 " href="/">Gleam</a>
  </div>

</footer>
        </div>
    );
};

export default Footer;